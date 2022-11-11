import styled from "@emotion/styled";

interface rootProps {
  root: boolean;
}

export const CommentWrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  
`;

export const CommentButton = styled.button<rootProps>`
  background: none;
  border: none;
  width: 95%;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 1%;
  /* margin-left: ${(props) => (props.root ? "1%" : "auto")};*/
  /* margin-left: auto; */
`;

export const CommentCardWrapperDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const CommentNickname = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
  padding: 3%;
  width: 95%;
`;

export const CommentContent = styled.div`
  width: 100%;
`;

export const CommentDateDiv = styled.div`
  position: absolute;
  right: 3%;
  top: 3%;
  width: 20%;
  font-size: 0.7rem;
`;

export const CommentWriteWrapperDiv = styled.div`
  position: relative;
  width: 100%;
  height: 3vh;
`;

export const CommentInputWrapperDiv = styled.div`
  background-color: #222222;
  border-radius: 8px;
  padding: 5px;
  position: fixed;
  left: 0%;
  width: 98%;
  height: 4vh;
  display: flex;
  bottom: 0px;
  align-items: center;
  font-size: 1rem;
`;

export const CommentWriteInput = styled.input`
  width: 60%;
  height: 2vh;
  margin-left: auto;
  margin-right: 3%;
`;

export const CommentInfoDiv = styled.div`
  width: 37%;
  margin-left: 3%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const CommentRecommentCancelButton = styled.button`
  margin-left: 1%;
  border: none;
  background: none;
`;

export const CommentRecommentWrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const CommentSendButton = styled.button`
  border: none;
  background: none;
`;

export const CommentSendWrapperDiv = styled.div`
  margin-right: 3%;
`;
