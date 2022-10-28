package com.hipmap.domain.user;

import com.hipmap.domain.user.dto.EmailRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final JavaMailSender javaMailSender;
    private final RedisUtil redisUtil;

    @Transactional
    @Override
    public void authEmail(EmailRequestDto request) {

        // 임의의 authKey 생성
        String authKey = String.valueOf(new Random().nextInt(888888) + 111111); // 범위 : 111111 ~ 999999

        // 이메일 발송
        sendAuthEmail(request.getEmail(), authKey);
    }

    /**
     * 이메일 전송 ( Redis에 인증 번호 저장[5분간 유효] )
     * @param email 전송받을 이메일
     * @param authKey 임의의 authKey
     */
    private void sendAuthEmail(String email, String authKey) {
        String subject = "대동힙지도에서 보낸 이메일 인증입니다.";
        String text = "회원 가입을 위한 인증번호는 " + authKey + "입니다. <br/>";

        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "utf-8");
            helper.setTo(email);
            helper.setSubject(subject);
            helper.setText(text, true); //포함된 텍스트가 HTML이라는 의미로 true.
            javaMailSender.send(mimeMessage);

        } catch (MessagingException e) {
            e.printStackTrace();
        }

        // 유효 시간(5분)동안 {email, authKey} 저장
        redisUtil.setDataExpire(authKey, email, 60 * 5L);
    }
}
