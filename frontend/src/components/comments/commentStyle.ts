import styled from "@emotion/styled";

interface rootProps {
  root: boolean;
}

export const CommentWrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

export const CommentButton = styled.div<rootProps>`
  background: none;
  border: none;
  width: 95%;
  display: flex;
  flex-direction: column;
  color: black;
`;

export const CommentCardWrapperDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  position: relative;
`;

export const CommentNickname = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: bolder;
  min-width: 100px;
  max-width: 150px;
  height: 100%;
  @media (max-width: 699px) {
    font-size: 0.5rem;
    min-width: 50px;
    max-width: 60px;
  }
`;

export const CommentContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: start;
  font-weight: bold;
  font-size: 0.8rem;
  @media (max-width: 699px) {
    font-size: 0.6rem;
  }
`;

export const CommentDateDiv = styled.div`
  margin-right: auto;
  width: 15%;
  max-width: 50px;
  font-size: 0.3rem;
`;

export const CommentWriteWrapperDiv = styled.div`
  position: relative;
  width: 100%;
  height: 3vh;
`;

export const CommentInputWrapperDiv = styled.div`
  margin-top: auto;
  border-radius: 4px;
  width: 95%;
  background: black;
  height: 70px;
  display: flex;
  align-items: center;
`;

export const CommentWriteInput = styled.input`
  margin-left: 2%;
  flex: 1;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-right: 2%;
  color: white;
  @media (max-width: 699px) {
    /* max-width: 170px; */
  }
`;

export const CommentNicknameWrapperDiv = styled.div`
  font-size: 0.7rem;
  width: 130px;
  @media (max-width: 699px) {
    font-size: 0.4rem;
    width: 60px;
  }
`;

export const CommentNameNoneSelectDiv = styled.div`
  min-width: 50px;
  max-width: 70px;
`;
export const CommentInfoDiv = styled.div`
  margin-left: 1%;
`;

export const CommentRecommentCancelButton = styled.button`
  margin-left: 1%;
  border: none;
  background: none;
`;

export const CommentRecommentWrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentSendButton = styled.button`
  border: none;
  background: none;
`;

export const CommentSendWrapperDiv = styled.div`
  margin-right: 2%;
`;

export const CommentNoneDiv = styled.div`
  margin-left: 3%;
  margin-top: 3%;
`;

export const CommentCardDiv = styled.div<{ seq: boolean }>`
  width: ${(props) => (props.seq ? "95%" : "100%")};
  height: 50px;
  display: flex;
  font-size: 0.7rem;
  margin-left: auto;
  background: ${(props) => props.theme.colors.subColorGradient2};
  border-radius: 4px;
  margin-top: 1px;
  margin-bottom: 1px;
`;

export const CommentDeleteButton = styled.button`
  background: none;
  border: none;
`;
