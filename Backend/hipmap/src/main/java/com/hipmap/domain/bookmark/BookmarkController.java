package com.hipmap.domain.bookmark;


import com.hipmap.domain.common.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(value = "북마크 API", tags = {"Bookmark"})
@RestController
@RequestMapping("/hip/bookmark")
@RequiredArgsConstructor
public class BookmarkController {

    @Autowired
    BookmarkService bookmarkService;

    @PostMapping()
    @ApiOperation(value = "북마크 생성", notes = "북마크 생성")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<?> createBookmark(@RequestParam Long shortsId){
        Long userId = Long.valueOf(1); // authentication 생기면 수정
        BookmarkEntity bookmark = bookmarkService.createBookmark(userId,shortsId);
        return new ResponseEntity<CreateBookmarkResponse>(new CreateBookmarkResponse(bookmark.getBookmarkId(), userId,shortsId), HttpStatus.OK);
    }

    @GetMapping()
    @ApiOperation(value = "북마크 조회", notes = "유저별 북마크 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<?> getBookmarkByUser(@RequestParam Long userId){
     /*
     authentication 생기면 수정
      */
        return new ResponseEntity<>(bookmarkService.findBookmarksByUserId(userId), HttpStatus.OK);
    }

    @DeleteMapping()
    @ApiOperation(value = "북마크 삭제", notes = "북마크 삭제")

    public BaseResponseBody deleteBookmark(@RequestParam Long shortsId){
        Long userId = Long.valueOf(1); // user 생기면 수정
        bookmarkService.deleteBookmark(userId,shortsId);
        return BaseResponseBody.of(200, "Success");
    }
}
