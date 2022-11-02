import {
  BestHipPlaceTitleDiv,
  BestHipPlaceWrapper,
} from "../../styles/bestHipPlace/BestHipPlaceStyle";
import Slide from "./Slide";

const BestHipPlace = () => {
  return (
    <BestHipPlaceWrapper>
      <BestHipPlaceTitleDiv>베스트 힙 플레이스</BestHipPlaceTitleDiv>
      <div>
        <Slide />
      </div>
    </BestHipPlaceWrapper>
  );
};

export default BestHipPlace;
