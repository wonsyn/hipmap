/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useFetchShortsSameLabel } from "../../../../hoc/useFetch";
import { SameHipPlaceWrapperDiv } from "../../styles/sameHipPlace";
import SameHipPlaceCardWrapper from "./CardWrapper";

const SameHipPlace = ({ label }: { label: string }) => {
  const { data: sameLabel, isLoading: sameLabelLoading } =
    useFetchShortsSameLabel(label);
  return (
    <SameHipPlaceWrapperDiv>
      <div
        css={css`
          font-size: 1.5rem;
          font-weight: bolder;
        `}
      >
        {label}들이 선택한 힙한 장소 둘러보기
      </div>
      {sameLabel && !sameLabelLoading && sameLabel.shortsList && (
        <SameHipPlaceCardWrapper data={sameLabel} />
      )}
    </SameHipPlaceWrapperDiv>
  );
};

export default SameHipPlace;
