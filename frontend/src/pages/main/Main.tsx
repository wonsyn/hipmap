/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import BestHipPlace from "./component/bestHipPlace";
import HipVote from "./component/hipVote";
import MyHipContainer from "./component/MyHip";
import SameHipPlace from "./component/sameHipPlace";

const Main = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(["shortsInfinite"]);
  }, []);
  return (
    <div>
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
      <HipVote />
      <div
        css={css`
          margin-bottom: 10vh;
        `}
      ></div>
    </div>
  );
};

export default Main;
