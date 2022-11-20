package com.hipmap.domain.user;

import com.amazonaws.services.kms.model.NotFoundException;
import com.hipmap.domain.user.Exception.EmailAuthNotFoundException;
import com.hipmap.domain.user.Exception.ExpiredEmailAuthException;
import com.hipmap.domain.user.Exception.UserNotFoundException;
import com.hipmap.global.util.RedisUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class AuthEmailService {
    private final UserRepository userRepository;
    private final RedisUtil redisUtil;
    private final JavaMailSender emailSender;

    @Async
    public void sendMail(String to, String sub, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(sub);
        message.setText(text);
        emailSender.send(message);
    }

    @Async
    public void sendAuthMail(String email) throws NotFoundException {
        String AUTH_LINK = "http://k7b108.p.ssafy.io:8080/api/user/auth/";
        if(email == null) throw new EmailAuthNotFoundException("멤버가 조회되지 않음");
        UUID uuid = UUID.randomUUID();
        redisUtil.setDataExpire(uuid.toString(), email, 24 * 60 * 60L);
        sendMail(email, "회원가입 인증 메일입니다.", AUTH_LINK + uuid.toString());
    }

    @Transactional
    public void authEmail(String key) throws NotFoundException {
        String memberEmail = redisUtil.getData(key);
        if(memberEmail == null) throw new EmailAuthNotFoundException("유효하지 않은 링크입니다.");

        UserEntity user = userRepository.findByEmail(memberEmail).orElseThrow(UserNotFoundException::new);
        LocalDateTime dateTime = user.getRegDateTime();
        Duration duration = Duration.between(dateTime, LocalDateTime.now());
        if(duration.getSeconds() >= 86400) {
            throw new ExpiredEmailAuthException();
        }

        redisUtil.deleteData(key);
        user.auth();
    }

    @Scheduled(cron = "0 0 * * * ?")
    public void removeAuth() {
        List<UserEntity> userList = userRepository.findByIsCertedFalseAndRegDateTimeLessThanEqual(LocalDateTime.now().minusDays(1));
        userRepository.deleteAll(userList);
    }
}
