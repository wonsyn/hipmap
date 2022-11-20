import React from "react";
import { selectComment } from "..";
import { useCommentDelete } from "../../../hoc/useMutation";
import { useAppSelector } from "../../../hoc/useStoreHooks";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  CommentButton,
  CommentCardDiv,
  CommentCardWrapperDiv,
  CommentContent,
  CommentDateDiv,
  CommentDeleteButton,
  CommentNickname,
} from "../commentStyle";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { mutate: deleteComment } = useCommentDelete();
  const time = createTime.slice(5, 16);
  return (
    <CommentButton root={sequence > 1 ? false : true}>
      <CommentCardDiv seq={sequence > 1 ? true : false}>
        <CommentCardWrapperDiv>
          <CommentNickname
            onClick={() => {
              if (myUserId === userId) {
                navigate("/myProfile/" + myUserId);
              } else {
                navigate("/myPage/" + userId);
              }
            }}
          >
            {userNickname} :{" "}
          </CommentNickname>
          <CommentContent onClick={getCommentId}>{content}</CommentContent>
          {userId === myUserId && (
            <CommentDeleteButton
              onClick={() => {
                deleteComment({ commentId: parseInt(commentId) });
              }}
            >
              <DeleteIcon />
            </CommentDeleteButton>
          )}
          <CommentDateDiv>{time}</CommentDateDiv>
        </CommentCardWrapperDiv>
      </CommentCardDiv>
    </CommentButton>
  );
};

export default CommentWrapper;
