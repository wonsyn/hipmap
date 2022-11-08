import React from "react";
import { selectComment } from "..";
import Card from "../../card/Card";
import {
  CommentButton,
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
  getComment,
}: comment) => {
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
        <div>
          <CommentNickname>{userNickname}</CommentNickname>
          <CommentContent>{content}</CommentContent>
          <CommentDateDiv>{createTime}</CommentDateDiv>
        </div>
      </Card>
    </CommentButton>
  );
};

export default CommentWrapper;
