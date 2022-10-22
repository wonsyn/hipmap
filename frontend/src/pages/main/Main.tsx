/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import BestHipPlace from "./component/bestHipPlace";
import MyHipContainer from "./component/MyHip";
import SameHipPlace from "./component/sameHipPlace";

const Main = () => {
  return (
    <div style={{ marginBottom: "10%" }}>
      <BestHipPlace />
      <MyHipContainer />
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <SameHipPlace />
      </div>
    </div>
  );
};

export default Main;
