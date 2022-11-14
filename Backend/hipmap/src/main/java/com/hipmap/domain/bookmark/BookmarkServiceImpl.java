package com.hipmap.domain.bookmark;

import com.hipmap.domain.bookmark.dto.response.GetBookmarkResponse;
import com.hipmap.domain.shorts.ShortsEntity;
import com.hipmap.domain.shorts.ShortsRepository;
import com.hipmap.domain.user.UserEntity;
import com.hipmap.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookmarkServiceImpl implements BookmarkService {

    private final BookmarkRepository bookmarkRepository;

    private final UserRepository userRepository;

    private final ShortsRepository shortsRepository;

    @Override
    public BookmarkEntity createBookmark(Long userId, Long shortsId) {
        BookmarkEntity newBookmark = new BookmarkEntity();
        Optional<UserEntity> userOp = userRepository.findById(userId);
        if (userOp.isPresent()) {
            UserEntity user = userOp.get();
            newBookmark.setUser(user);
            Optional<ShortsEntity> shortsOp = shortsRepository.findById(shortsId);
            if(shortsOp.isPresent()) {
                newBookmark.setShorts(shortsOp.get());
                return bookmarkRepository.save(newBookmark);
            }else throw new IllegalArgumentException("존재하지 않는 쇼츠입니다.");
        }
        else throw new IllegalArgumentException("존재하지 않는 유저입니다.");


    }

    @Override
    @Transactional
    public void deleteBookmark(Long userId, Long shortsId) {
        Optional<UserEntity> user = userRepository.findById(userId);
        if (user.isPresent()) {
            Optional<ShortsEntity> shortsOp = shortsRepository.findById(shortsId);
            Long bookmarkId = bookmarkRepository.findBookmarkByUserAndShorts(user.get(),shortsOp.get()).getBookmarkId();
            bookmarkRepository.deleteById(bookmarkId);
        }else throw new IllegalArgumentException("존재하지 않는 유저입니다.");

    }

    @Override
    public List<GetBookmarkResponse> findBookmarksByUserId(Long userId) {
        Optional<UserEntity> user = userRepository.findById(userId);
        if (user.isPresent()) {
            List<BookmarkEntity> bookmarkEntities = bookmarkRepository.findByUser(user.get());
            List<GetBookmarkResponse> bookmarkResponses = bookmarkEntities.stream()
                    .map(m -> new GetBookmarkResponse(m.getShorts().getShortsId(), m.getShorts().getThumbnailSrc(),m.getUser().getNickname()))
                    .collect(Collectors.toList());
            return bookmarkResponses;
        }
        else throw new IllegalArgumentException("존재하지 않는 유저입니다.");
    }
}
