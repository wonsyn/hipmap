package com.hipmap.domain.comment;

import com.hipmap.domain.comment.request.CreateCommentRequest;
import com.hipmap.domain.comment.request.UpdateCommentRequest;
import com.hipmap.domain.comment.response.GetCommentResponse;
import com.hipmap.domain.shorts.ShortsEntity;
import com.hipmap.domain.shorts.ShortsRepository;
import com.hipmap.domain.user.UserEntity;
import com.hipmap.domain.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    CommentReposiotrySupport commentReposiotrySupport;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ShortsRepository shortsRepository;

    @Override
    @Transactional
    public CommentEntity createComment(Long userId, Long shortsId, CreateCommentRequest request) {

        Optional<UserEntity> userOp = userRepository.findById(userId);
        if (userOp.isPresent()) {
            UserEntity user = userOp.get();
            Optional<ShortsEntity> shortsOp = shortsRepository.findById(shortsId);
            if (shortsOp.isPresent()) {
                CommentEntity newComment = CommentEntity.builder()
                        .content(request.getContent())
                        .shorts(shortsOp.get())
                        .user(user)
                        .commentGroup(request.getGroup())
                        .sequence(request.getSequence())
                        .createTime(LocalDateTime.now())
                        .build();
                return commentRepository.save(newComment);
            } else throw new IllegalArgumentException("존재하지 않는 쇼츠입니다.");
        } else throw new IllegalArgumentException("존재하지 않는 유저입니다.");
    }

    @Override
    @Transactional
    public CommentEntity updateComment(Long shortsId, Long commentId, UpdateCommentRequest request) {
        Optional<CommentEntity> cmtOp = commentRepository.findById(commentId);
        if(cmtOp.isPresent()){
            CommentEntity updateCmt = cmtOp.get();
            updateCmt.setContent(request.getContent());
            return updateCmt;
        }else throw new IllegalArgumentException("존재하지 않는 commentId입니다.");
    }

    @Override
    public List<GetCommentResponse> findCommentsByShortsId(Long shortsId) {
        List<CommentEntity> commentEntities = commentReposiotrySupport.findCommentsByShortsId(shortsId);

        List<GetCommentResponse> commentList = commentEntities.stream()
                .map(m-> new GetCommentResponse(m.getCommentId(),m.getContent(),m.getCommentGroup(),m.getSequence(),m.getCreateTime(),m.getUser().getNickname()))
                .collect(Collectors.toList());
        return commentList;
    }

    @Override
    public void deleteComment(Long userId, Long commentId) {

           Optional<CommentEntity> commentOp = commentRepository.findById(commentId);
           if(commentOp.isPresent()){
               commentRepository.deleteById(commentId);
           }else throw new IllegalArgumentException("존재하지 않는 commentid입니다.");

    }
}
