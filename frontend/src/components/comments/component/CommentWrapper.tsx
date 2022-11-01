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
  nickname: string;
  comment_id: string;
  content: string;
  group: number;
  sequence: number;
  create_time: string;
  index: number;
  getComment: (e: selectComment) => void;
}

const CommentWrapper = ({
  nickname,
  comment_id,
  content,
  group,
  sequence,
  create_time,
  index,
  getComment,
}: comment) => {
  const getCommentId = () => {
    const e = {
      nickname,
      comment_id,
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
          <CommentNickname>{nickname}</CommentNickname>
          <CommentContent>{content}</CommentContent>
          <CommentDateDiv>{create_time}</CommentDateDiv>
        </div>
      </Card>
    </CommentButton>
  );
};

export default CommentWrapper;
