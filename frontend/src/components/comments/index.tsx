import { useState } from "react";
import { useFetchShortsComments } from "../../hoc/useFetch";
import { useCommentWrite } from "../../hoc/useMutation";
import { CommentListWrapperDiv } from "../../pages/shorts/styles/shortsStyle";
import { CommentNoneDiv, CommentWrapperDiv } from "./commentStyle";
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
  const [trigger, setTrigger] = useState<boolean>(false);
  console.log(sortedComments);
  const [selectComments, setSelectComment] = useState<
    selectComment | undefined
  >();
  const { mutate } = useCommentWrite();
  const getComment = (e: selectComment) => {
    console.log(e);
    setSelectComment(e);
  };
  const cleanSelectComment = () => {
    setSelectComment(undefined);
  };
  const getCommentInput = (e: string) => {
    if (selectComments && sortedComments) {
      const result = sortedComments.filter((e) => {
        return e.group === selectComments.group;
      });
      mutate(
        {
          id: shortsId,
          group: selectComments.group,
          sequence: result.length + 1,
          content: e,
        },
        {
          onSuccess: () => {
            cleanSelectComment();
            setTrigger(true);
          },
        }
      );
    } else if (sortedComments) {
      const lastIndex =
        sortedComments.length > 0
          ? sortedComments[sortedComments.length - 1].group
          : 0;
      mutate(
        {
          id: shortsId,
          group: lastIndex + 1,
          sequence: 1,
          content: e,
        },
        {
          onSuccess: () => {
            cleanSelectComment();
            setTrigger(true);
          },
        }
      );
    }
    console.log(e);
  };

  return (
    <CommentWrapperDiv>
      {sortedComments && sortedComments.length > 0 ? (
        <CommentListWrapperDiv>
          {sortedComments.map((e, i) => (
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
              userId={e.userId}
            />
          ))}
        </CommentListWrapperDiv>
      ) : (
        <CommentNoneDiv>댓글이 없습니다....</CommentNoneDiv>
      )}

      <WriteComment
        nickname={
          selectComments !== undefined ? selectComments.userNickname : null
        }
        getCommentInput={getCommentInput}
        cleanSelectComment={cleanSelectComment}
        trigger={trigger}
        setTrigger={setTrigger}
      />
    </CommentWrapperDiv>
  );
};

export default CommentsWrapper;
