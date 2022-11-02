/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import KakaoMap from "./KakaoMap";

// interface positionInfo {
//   lat:
// }

const KakaoMapWrapper = () => {
  // const [userPosition, setUserrPosition] = useState<>();
  return (
    <div
      css={css`
        width: 100%;
        height: 500px;
      `}
    >
      <KakaoMap />
    </div>
  );
};

export default KakaoMapWrapper;
