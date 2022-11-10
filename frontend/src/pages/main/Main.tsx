/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useFetchShortsInfinite } from "../../hoc/useFetch";
import { useAppSelector } from "../../hoc/useStoreHooks";
import BestHipPlace from "./component/bestHipPlace";
import HipVote from "./component/hipVote";
import MyHipContainer from "./component/MyHip";
import SameHipPlace from "./component/sameHipPlace";

const Main = () => {
  const userLabel = useAppSelector((store) => store.userReducer.user.labeling);
  const username = useAppSelector((store) => store.userReducer.user.username);
  const queryClient = useQueryClient();
  const { data: shortsData } = useFetchShortsInfinite();
  useEffect(() => {
    queryClient.invalidateQueries(["shortsInfinite"]);
  }, []);
  if (userLabel) {
    return (
      <div>
        <BestHipPlace />
        <MyHipContainer username={username} />
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          {userLabel && <SameHipPlace label={userLabel} />}
        </div>
        {shortsData && shortsData.pages && (
          <HipVote shortsData={shortsData.pages} />
        )}

        <div
          css={css`
            margin-bottom: 10vh;
          `}
        ></div>
      </div>
    );
  } else {
    return <div>로딩중...</div>;
  }
};

export default Main;
