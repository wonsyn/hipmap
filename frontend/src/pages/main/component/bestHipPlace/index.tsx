import { useFetchMainBest } from "../../../../hoc/useFetch";
import {
  BestHipPlaceTitleDiv,
  BestHipPlaceWrapper,
} from "../../styles/bestHipPlace/BestHipPlaceStyle";
import Slide from "./Slide";

const BestHipPlace = () => {
  const { data, isLoading } = useFetchMainBest();
  console.log(data);
  if (data) {
    return (
      <BestHipPlaceWrapper>
        <BestHipPlaceTitleDiv>베스트 힙 플레이스</BestHipPlaceTitleDiv>
        <div>
          <Slide data={data} />
        </div>
      </BestHipPlaceWrapper>
    );
  } else if (isLoading) {
    return <div>로딩중...</div>;
  } else {
    return <div>에러가 발생했습니다.</div>;
  }
};

export default BestHipPlace;
