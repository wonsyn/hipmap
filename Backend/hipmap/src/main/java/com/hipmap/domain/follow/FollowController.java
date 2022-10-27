package com.hipmap.domain.follow;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/follow")
@RequiredArgsConstructor
public class FollowController {

    private final FollowService followService;

    @PostMapping
    public ResponseEntity<String> create(@RequestBody String loginUsername, @RequestBody String username) {
        followService.createFollow(loginUsername, username);
        return ResponseEntity.ok().body("성공");
    }

}
