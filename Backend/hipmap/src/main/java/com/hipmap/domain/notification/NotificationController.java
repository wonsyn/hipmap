package com.hipmap.domain.notification;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.logging.Logger;
@Api(value = "알림 API", tags = {"Notification"})
@RestController
public class NotificationController {
    private final NotificationService notificationService;


    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }


    @ApiOperation(value = "알림 구독", notes = "로그인 한 유저를 sse 연결해 알림을 구독한다")
    @GetMapping(value = "/subscribe/{id}", produces = "text/event-stream")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public SseEmitter subscribe(@PathVariable Long id,
                                @RequestHeader(value = "Last-Event-ID", required = false, defaultValue = "") String lastEventId) {

        return notificationService.subscribe(id, lastEventId);
    }


    @ApiOperation(value = "알림 조회", notes = "로그인 한 유저의 모든 알림 조회한다")
    @GetMapping("/notifications")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<NotificationsResponse> notifications(@RequestParam Long userId) {
        return ResponseEntity.ok().body(notificationService.findAllById(userId));
    }


    @ApiOperation(value = "알림 읽음 상태 변경", notes = "알림 읽음 상태를 변경한다")
    @PatchMapping("/notifications/{id}")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<Void> readNotification(@PathVariable Long id) {
        notificationService.readNotification(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
