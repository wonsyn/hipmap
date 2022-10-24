/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SameHipPlaceWrapperDiv } from "../../styles/sameHipPlace";
import SameHipPlaceCardWrapper from "./CardWrapper";

const SameHipPlace = () => {
  return (
    <SameHipPlaceWrapperDiv>
      <div
        css={css`
          font-size: 1.5rem;
          font-weight: bolder;
        `}
      >
        조선 힙스터들이 선택한 힙한 장소 둘러보기
      </div>
      <SameHipPlaceCardWrapper />
    </SameHipPlaceWrapperDiv>
  );
};

export default SameHipPlace;
