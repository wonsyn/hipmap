/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import http from "../../utils/http-commons";
import BestHipPlace from "./component/bestHipPlace";
import HipVote from "./component/hipVote";
import MyHipContainer from "./component/MyHip";
import SameHipPlace from "./component/sameHipPlace";

const Main = () => {
  const follow = () => {
    http.post(`/follow/` + 8).then((res) => {
      console.log(res);
    });
  };
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(["shortsInfinite"]);
  }, []);
  return (
    <div>
      <BestHipPlace />
      <MyHipContainer />
      <button onClick={follow}>팔로우테스트</button>
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
