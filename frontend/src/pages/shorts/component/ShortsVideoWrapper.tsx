import { ShortsVideoDiv, ShortsVideoElementDiv } from "../styles/shortsStyle";

const ShortsVideoWrapper = ({ data }: { data: number }) => {
  return (
    <ShortsVideoElementDiv>
      <ShortsVideoDiv>{data}</ShortsVideoDiv>
    </ShortsVideoElementDiv>
  );
};

export default ShortsVideoWrapper;
