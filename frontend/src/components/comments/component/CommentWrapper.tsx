import React from "react";
import { selectComment } from "..";
import { useCommentDelete } from "../../../hoc/useMutation";
import { useAppSelector } from "../../../hoc/useStoreHooks";
import Card from "../../card/Card";
import {
  CommentButton,
  CommentCardWrapperDiv,
  CommentContent,
  CommentDateDiv,
  CommentNickname,
} from "../commentStyle";

export interface comment {
  userNickname: string;
  commentId: string;
  content: string;
  group: number;
  sequence: number;
  createTime: string;
  index: number;
  userId: number;
  getComment: (e: selectComment) => void;
}

const CommentWrapper = ({
  userNickname,
  commentId,
  content,
  group,
  sequence,
  createTime,
  index,
  userId,
  getComment,
}: comment) => {
  const myUserId = useAppSelector((store) => store.userReducer.user.user_id);
  const getCommentId = () => {
    const e = {
      userNickname,
      commentId,
      group,
      sequence,
      index,
    };
    getComment(e);
  };
  const { mutate: deleteComment } = useCommentDelete();
  return (
    <CommentButton root={sequence > 1 ? false : true} onClick={getCommentId}>
      <Card
        width={sequence > 1 ? "90%" : "100%"}
        height="10vh"
        display="flex"
        font_size="1rem"
        margin_left="auto"
        background="linear-gradient(92.79deg,#EA047E,#FFC23C)"
      >
        <CommentCardWrapperDiv>
          <CommentNickname>{userNickname}</CommentNickname>
          <CommentContent>{content}</CommentContent>
          <CommentDateDiv>{createTime}</CommentDateDiv>
          {userId === myUserId && (
            <button
              onClick={() => {
                deleteComment({ commentId: parseInt(commentId) });
              }}
            >
              삭제
            </button>
          )}
        </CommentCardWrapperDiv>
      </Card>
    </CommentButton>
  );
};

export default CommentWrapper;
