import { useEffect, useRef, useState } from "react";
import ShortsVideoWrapper from "./component/ShortsVideoWrapper";
import {
  ShortsVideoAreaDiv,
  ShortsVideoWrapperDiv,
  ShortsWrapperDiv,
} from "./styles/shortsStyle";
import { FullPage, Slide } from "react-full-page";

const Shorts = () => {
  const [shortsData, setShortsData] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <ShortsWrapperDiv>
      <ShortsVideoWrapperDiv ref={scrollRef}>
        <FullPage>
          {shortsData.map((e, i) => (
            // <ShortsVideoAreaDiv key={i}>
            <Slide>
              <ShortsVideoWrapper data={e} />
            </Slide>
            // </ShortsVideoAreaDiv>
          ))}
        </FullPage>
      </ShortsVideoWrapperDiv>
    </ShortsWrapperDiv>
  );
};

export default Shorts;
