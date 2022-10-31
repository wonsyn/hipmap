package com.hipmap.domain.notification;

import com.hipmap.domain.notification.emitter.EmitterRepository;

import com.hipmap.domain.user.UserEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import javax.persistence.EntityNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Service
public class NotificationService {
    private final EmitterRepository emitterRepository;
    private final NotificationRepository notificationRepository;

    private final NotificationRepositorySupport notificationRepositorySupport;

    private static final Logger log = LoggerFactory.getLogger(NotificationService.class);
    private static final Long DEFAULT_TIMEOUT = 60L * 1000 * 60;

    public NotificationService(EmitterRepository emitterRepository, NotificationRepository notificationRepository, NotificationRepositorySupport notificationRepositorySupport) {
        this.emitterRepository = emitterRepository;
        this.notificationRepository = notificationRepository;
        this.notificationRepositorySupport = notificationRepositorySupport;
    }

    public SseEmitter subscribe(Long userId, String lastEventId){
        String id = userId +"_"+ System.currentTimeMillis();

        SseEmitter emitter = emitterRepository.save(id, new SseEmitter(DEFAULT_TIMEOUT));

        emitter.onCompletion(() -> emitterRepository.deleteById(id));
        emitter.onTimeout(() -> emitterRepository.deleteById(id));
        // 시간이 만료된 경우 자동으로 레포지토리에서 삭제 처리
        sendToClient(emitter, id, "EventStream Created. [userId=" + userId +"]");
        // 503 에러 방지용 더비 데이터 전송

        // 클라이언트가 미수신한 Event 목록이 존재할 경우 전송하여 Event 유실을 예방
        if (!lastEventId.isEmpty()) {
            Map<String, Object> events = emitterRepository.findAllEventCacheStartWithByMemberId(String.valueOf(userId));
            events.entrySet().stream()
                    .filter(entry -> lastEventId.compareTo(entry.getKey()) < 0)
                    .forEach(entry -> sendToClient(emitter, entry.getKey(), entry.getValue()));
        }

        return emitter;

    }
    private void sendToClient(SseEmitter emitter, String id, Object data) {
        try {
            emitter.send(SseEmitter.event()
                    .id(id)
                    .name("sse")
                    .data(data));
        } catch (IOException exception) {
            emitterRepository.deleteById(id);
            log.error("SSE 연결 오류ㅠㅠ");
        }
    }
    @Transactional
    public void send(UserEntity receiver,String content, String url) {
        NotificationEntity notification = createNotification(receiver, content, url);
        String userId = String.valueOf(receiver.getUserId());

        notificationRepository.save(notification);
        Map<String, SseEmitter> sseEmitters = emitterRepository.findAllEmitterStartWithByMemberId(userId);
        sseEmitters.forEach(
                (key, emitter) -> {
                    emitterRepository.saveEventCache(key, notification);
                    sendToClient(emitter, key, NotificationResponse.from(notification));
                }
        );
    }

    private NotificationEntity createNotification(UserEntity receiver, String content, String url) {
        return NotificationEntity.builder()
                .receiver(receiver)
                .content(content)
                .url(url)
                .isRead(false)
                .build();
    }

    @Transactional
    public NotificationsResponse findAllById(Long userId) {
        List<NotificationResponse> responses = notificationRepositorySupport.findAllByReceiverId(userId).stream()
                .map(NotificationResponse::from)
                .collect(Collectors.toList());
        long unreadCount = responses.stream()
                .filter(notification -> !notification.isRead())
                .count();

        return NotificationsResponse.of(responses, unreadCount);
    }

    @Transactional
    public void readNotification(Long id) {
        NotificationEntity notification = notificationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 알림입니다."));
        notification.read();
    }
}
