package com.hipmap.domain.user;

import com.amazonaws.services.kms.model.NotFoundException;
import com.hipmap.domain.user.Exception.EmailAuthNotFoundException;
import com.hipmap.global.util.RedisUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.UUID;

@RequiredArgsConstructor
@Service
public class AuthEmailService {
    private final UserRepository userRepository;
    private final RedisUtil redisUtil;
    private final JavaMailSender emailSender;

    public void sendMail(String to, String sub, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(sub);
        message.setText(text);
        emailSender.send(message);
    }

    public void sendAuthMail(String email) throws NotFoundException {
        String AUTH_LINK = "http://localhost:8080/api/user/auth/";
        if(email == null) throw new EmailAuthNotFoundException("멤버가 조회되지 않음");
        UUID uuid = UUID.randomUUID();
        System.out.println("UUID String: " + uuid.toString());
        redisUtil.setDataExpire(uuid.toString(), email, 60 * 30L);
        sendMail(email, "회원가입 인증 메일입니다.", AUTH_LINK + uuid.toString());
    }

    public void authEmail(String key) throws NotFoundException {
        String memberEmail = redisUtil.getData(key);
        if(memberEmail == null) throw new EmailAuthNotFoundException("유효하지 않은 링크입니다.");
        redisUtil.deleteData(key);
    }
}
