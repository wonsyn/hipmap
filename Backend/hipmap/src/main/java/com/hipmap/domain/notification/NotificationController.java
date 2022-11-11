package com.hipmap.domain.notification;

import com.hipmap.domain.notification.dto.response.NotificationsResponse;
import com.hipmap.global.util.JwtUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import javax.servlet.http.HttpServletRequest;

@Api(value = "알림 API", tags = {"Notification"})
@RestController
@RequiredArgsConstructor
public class NotificationController {
    private final NotificationService notificationService;
    private final JwtUtil jwtUtil;



    @ApiOperation(value = "알림 구독", notes = "로그인 한 유저를 sse 연결해 알림을 구독한다")
    @GetMapping(value = "/subscribe", produces = "text/event-stream")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public SseEmitter subscribe(@RequestHeader(value = "Last-Event-ID", required = false, defaultValue = "") String lastEventId, HttpServletRequest httpRequest) {
        Long userId = jwtUtil.getUserInfo(httpRequest.getHeader("accessToken")).getId();
        return notificationService.subscribe(userId, lastEventId);
    }


    @ApiOperation(value = "알림 조회", notes = "로그인 한 유저의 모든 알림 조회한다")
    @GetMapping("/notifications")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<NotificationsResponse> notifications(HttpServletRequest httpRequest) {
        Long userId = jwtUtil.getUserInfo(httpRequest.getHeader("accessToken")).getId();
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
