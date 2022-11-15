import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const move = keyframes`
  0%{

  }
`;

export const MyFollowWrapperDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MyFollowElementWrapperDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyFollowCountElement = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyFollowBackButton = styled.div`
  border: none;
  margin: 3%;
`;

export const MyFollowTabs = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MyFollowTab = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
`;

export const MyFollowTabBorder = styled.div<{ select: boolean }>`
  border-bottom: 1px solid white;
  position: absolute;
  width: 50%;
  transition: all 250ms ease-in-out;
  -webkit-transition: all 250ms ease-in-out;
  -moz-transition: all 250ms ease-in-out;
  bottom: 0px;
  left: ${(props) => (props.select ? `0%` : `50%`)};
`;

export const MyFollowListWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const MyFollowListDiv = styled.div`
  display: flex;
  width: 85%;
  margin-bottom: 40px;
  height: 5vh;
  align-items: center;
`;

export const MyFollowProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 2%;
`;
export const MyFollowProfileWrapperDiv = styled.div<{ url: string }>`
  width: 10vh;
  max-width: 50px;
  max-height: 50px;
  height: 10vh;
  border-radius: 50%;
  margin-right: 2%;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-position: center;
`;
export const MyFollowProfileImg = styled.img`
  width: auto;
  max-width: 50px;
  /* max-height: 60px; */
  height: auto;
  border-radius: 50%;
  margin-right: 2%;
`;

export const MyFollowAddButton = styled.button`
  border: none;
  border-radius: 8px;
  background: #3a3a3a;
  margin-left: auto;

  width: 100px;
  min-height: 4vh;
  height: 50%;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  :disabled {
    color: black;
  }
`;

export const MyFollowIdWrapper = styled.div`
  font-size: 1.8rem;
  font-weight: bolder;
`;

export const MyFollowSearchBarInput = styled.input`
  width: 100%;
  border-radius: 8px;
  background-color: #d9d9d9;
  height: 3vh;
  border: none;
  max-height: 30px;
`;

export const MyFollowSearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const MyFollowSearchAreaDiv = styled.div`
  width: 85%;
`;

export const MyFollowSearchTitleDiv = styled.div`
  font-size: 1rem;
  margin-bottom: 3%;
`;

export const MyFollowListArea = styled.div<{ select: boolean }>`
  width: 200%;
  display: flex;
  justify-content: center;
  transform: translateX(${(props) => (props.select ? `0vw` : `-50%`)});
  transition: 0.3s;
`;

export const FollowListWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline-start: 0;
`;

export const FollowSearchListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
