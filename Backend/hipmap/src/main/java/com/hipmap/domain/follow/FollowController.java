package com.hipmap.domain.follow;

import com.hipmap.domain.follow.Exception.FollowSameUserException;
import com.hipmap.domain.follow.dto.FollowListResponseDto;
import com.hipmap.global.util.JwtUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/follow")
@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RequiredArgsConstructor
@Api(tags = {"팔로우"})
public class FollowController {

    private final FollowService followService;
    private final JwtUtil jwtUtil;

    @PostMapping("{opponentUserId}")
    @ApiOperation(value = "팔로우 추가", notes = "팔로우를 추가합니다.")
    public ResponseEntity<String> create(@PathVariable(name = "opponentUserId") Long opponentUserId, HttpServletRequest request) {
        Long loginUserId = jwtUtil.getUserInfo(request.getHeader("accessToken")).getId();
        if(loginUserId == opponentUserId){
            throw new FollowSameUserException();
        }
        followService.createFollow(loginUserId, opponentUserId);
        return ResponseEntity.ok().body("성공");
    }

    @DeleteMapping("{opponentUserId}")
    @ApiOperation(value = "팔로워 삭제", notes = "로그인 유저가 팔로우하고 있는 유저를 언팔로우합니다.")
    public ResponseEntity<String> delete(@PathVariable Long opponentUserId, HttpServletRequest request) {
        Long loginUserId = jwtUtil.getUserInfo(request.getHeader("accessToken")).getId();

        followService.deleteFollow(loginUserId, opponentUserId);
        return ResponseEntity.ok().body("성공");
    }

    @GetMapping("followerList")
    @ApiOperation(value = "팔로워 리스트 조회", notes = "userId를 follow하고 있는 유저 리스트")
    public ResponseEntity<FollowListResponseDto> getFollowerList(@RequestParam(name = "userId") Long userId) {
        // 나중에 반환할 때 profile_img도 반환하도록 수정해야함
        return ResponseEntity.status(HttpStatus.OK)
                .body(new FollowListResponseDto(followService.getFollowerList(userId)));
    }

    @GetMapping("followingList")
    @ApiOperation(value = "팔로잉 리스트 조회", notes = "userId가 follow하고 있는 유저 리스트")
    public ResponseEntity<FollowListResponseDto> getFollowingList(@RequestParam(name = "userId") Long userId) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(new FollowListResponseDto(followService.getFollowingList(userId)));
    }

    @GetMapping
    @ApiOperation(value = "팔로잉 검색", notes = "팔로잉하고있는 키워드로 검색합니다.")
    public ResponseEntity<FollowListResponseDto> searchFollowings(@RequestParam("keyword") String keyword, HttpServletRequest request) {
        Long loginUserId = jwtUtil.getUserInfo(request.getHeader("accessToken")).getId();
        // 반환할 데이터 상의해바야댐. 명세서에는 아무것도없었음.
        return ResponseEntity.status(HttpStatus.OK)
                .body(new FollowListResponseDto(followService.searchFollowers(keyword, loginUserId)));
    }

    @GetMapping("followerCount/{userId}")
    @ApiOperation(value = "유저 팔로워 수 조회", notes = "유저의 id(pk 말고 실제 로그인 id)가 팔로우하는 유저 수를 조회하는 api입니다.")
    public ResponseEntity<Long> getCountMyFollowers(@PathVariable Long userId) {
        return ResponseEntity.status(HttpStatus.OK).body(followService.countFollower(userId));
    }

    @GetMapping("followingCount/{userId}")
    @ApiOperation(value = "유저 팔로잉 수 조회", notes = "유저의 id(pk 말고 실제 로그인 id)를 팔로잉하는 유저 수를 조회하는 api입니다.")
    public ResponseEntity<Long> getCountFollowing(@PathVariable Long userId) {
        return ResponseEntity.status(HttpStatus.OK).body(followService.countFollowing(userId));

    }
}
