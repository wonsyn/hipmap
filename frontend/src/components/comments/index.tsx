import { useState } from "react";
import { useCommentSort } from "../../hoc/useCommetSort";
import { useFetchShortsComments } from "../../hoc/useFetch";
import { commentsDummy } from "./commentsDummy";
import { CommentWrapperDiv } from "./commentStyle";
import CommentWrapper from "./component/CommentWrapper";
import WriteComment from "./component/writeComment";

export interface comment {
  userNickname: string;
  commentId: string;
  content: string;
  group: number;
  sequence: number;
  createTime: string;
}

export interface selectComment {
  userNickname: string;
  commentId: string;
  group: number;
  sequence: number;
}

interface writeComment extends selectComment {
  content: string;
}
export interface commentsProps {
  comments: comment[];
}

const CommentsWrapper = ({ shortsId }: { shortsId: number }) => {
  const { data: sortedComments } = useFetchShortsComments(shortsId);
  const [selectComments, setSelectComment] = useState<
    selectComment | undefined
  >();

  const getComment = (e: selectComment) => {
    setSelectComment(e);
  };
  const cleanSelectComment = () => {
    setSelectComment(undefined);
  };
  const getCommentInput = (e: string) => {
    if (selectComments) {
    }
    console.log(e);
  };

  return (
    <CommentWrapperDiv>
      {sortedComments &&
      sortedComments.comments &&
      sortedComments.comments.length > 0 ? (
        <>
          {sortedComments.comments.map((e, i) => (
            <CommentWrapper
              key={i}
              getComment={getComment}
              commentId={e.commentId}
              content={e.content}
              createTime={e.createTime}
              group={e.group}
              index={i}
              userNickname={e.userNickname}
              sequence={e.sequence}
            />
          ))}
        </>
      ) : (
        <div>댓글이 없습니다....</div>
      )}

      <div>
        <WriteComment
          nickname={
            selectComments !== undefined ? selectComments.userNickname : null
          }
          getCommentInput={getCommentInput}
          cleanSelectComment={cleanSelectComment}
        />
      </div>
    </CommentWrapperDiv>
  );
};

export default CommentsWrapper;
