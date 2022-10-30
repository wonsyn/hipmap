package com.hipmap.domain.user;

import com.hipmap.domain.user.dto.EmailRequestDto;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @PostMapping("email")
    @ApiOperation(value = "이메일 인증", notes = "인증코드를 받을 이메일을 보내고 인증코드를 받는다.")
        public ResponseEntity<String> authEmail(@RequestBody @Valid EmailRequestDto request) {
        userService.authEmail(request);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public void emailConfirm(@RequestParam("key") String key) {

    }




}
