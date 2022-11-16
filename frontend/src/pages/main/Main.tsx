/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
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
  console.log("쇼츠 데이터", shortsData);

  const test = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const tokenObj = JSON.parse(token);
      const refreshToken = tokenObj.refreshToken;
      const response = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `/jwt/re-issue`,
        {
          headers: {
            refreshToken: refreshToken,
          },
        }
      );
      console.log(response.data);
    }
  };

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
            margin-bottom: 3vh;
          `}
        >
          {userLabel && <SameHipPlace label={userLabel} />}
        </div>
        {shortsData &&
        shortsData.pages &&
        shortsData.pages[0].result.totalPage > 0 ? (
          <HipVote shortsData={shortsData.pages} />
        ) : (
          <h2>아직 아무런 쇼츠가 없어요!</h2>
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
