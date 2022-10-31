import styled from "@emotion/styled";

interface rootProps {
  root: boolean;
}

export const CommentWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 10%;
  align-items: center;
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

export const CommentNickname = styled.div`
  font-size: 1.2rem;
  padding: 3%;
`;

export const CommentContent = styled.div`
  padding-left: 5%;
  width: 100%;
`;

export const CommentDateDiv = styled.div`
  position: absolute;
  right: 3%;
  top: 3%;
  width: 20%;
  font-size: 0.7rem;
`;
