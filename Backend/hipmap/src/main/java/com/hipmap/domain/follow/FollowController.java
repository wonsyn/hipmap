package com.hipmap.domain.follow;

import com.hipmap.domain.follow.dto.FollowerFindAllResponseDto;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/follow")
@RequiredArgsConstructor
public class FollowController {

    private final FollowService followService;

    @PostMapping("{opponentUsername}")
    @ApiOperation(value = "팔로우 추가",notes = "팔로우를 추가합니다.")
    public ResponseEntity<String> create(@PathVariable(name = "opponentUsername") String username) {
        String loginUsername = "ssafy1";
        followService.createFollow(loginUsername, username);
        return ResponseEntity.ok().body("성공");
    }

    @DeleteMapping("{opponentUsername}")
    @ApiOperation(value = "팔로워 삭제", notes = "로그인 유저가 팔로우하고 있는 유저를 언팔로우합니다.")
    public ResponseEntity<String> delete(@PathVariable String opponentUsername) {
        String loginUsername = "ssafy1";  // 헤더 접근
        followService.deleteFollow(loginUsername, opponentUsername);
        return ResponseEntity.ok().body("성공");
    }

    @GetMapping("followerList")
    @ApiOperation(value = "팔로워 리스트 조회", notes = "username이 follow하고 있는 유저 리스트")
    public ResponseEntity<List<FollowerFindAllResponseDto>> findAllByUsername(@RequestParam(name = "username") String username) {
        // 나중에 반환할 때 profile_img도 반환하도록 수정해야함
        return ResponseEntity.status(HttpStatus.OK).body(followService.findAllByUsername(username));
    }

    @GetMapping("followingList")
    @ApiOperation(value = "팔로잉 리스트 조회", notes = "username을 follow하고 있는 유저 리스트")
    public ResponseEntity<List<FollowerFindAllResponseDto>> findAllByFollowingUser(@RequestParam(name = "username") String username) {
        // 나중에 반환할 때 profile_img도 반환하도록 수정해야함
        return ResponseEntity.status(HttpStatus.OK).body(followService.findAllByFollowingUser(username));
    }

    @GetMapping
    @ApiOperation(value = "팔로워 검색", notes = "팔로워를 키워드로 검색합니다.")
    public ResponseEntity<List<String>> findByUsername(@RequestParam("followerName") String followerName) {
        String loginUsername = "ssafy1";
        // 반환할 데이터 상의해바야댐. 명세서에는 아무것도없었음.
        return ResponseEntity.status(HttpStatus.OK).body(followService.findAllSearchByfollowerName(followerName,loginUsername));
    }

    @GetMapping("followerCount/{username}")
    @ApiOperation(value = "유저 팔로워 수 조회", notes = "유저의 id(pk 말고 실제 로그인 id)가 팔로우하는 유저 수를 조회하는 api입니다.")
    public ResponseEntity<Long> getCountMyFollowers(@PathVariable String username) {
        return ResponseEntity.status(HttpStatus.OK).body(followService.countByFollower(username));
    }

    // 팔로잉 수 조회
    @GetMapping("followingCount/{username}")
    @ApiOperation(value = "유저 팔로잉 수 조회", notes = "유저의 id(pk 말고 실제 로그인 id)를 팔로잉하는 유저 수를 조회하는 api입니다.")
    public ResponseEntity<Long> getCountFollowing(@PathVariable String username) {
        return ResponseEntity.status(HttpStatus.OK).body(followService.countByFollowing(username));
    }
    // 팔로잉 리스트 조회

}
