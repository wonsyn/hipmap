import { useEffect, useRef, useState } from "react";
import ShortsVideoWrapper from "./component/ShortsVideoWrapper";
import { ShortsVideoAreaDiv, ShortsWrapperDiv } from "./styles/shortsStyle";

const Shorts = () => {
  const [shortsData, setShortsData] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(scrollRef);
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const scrollTop = scrollRef.current?.scrollTop;
      const pageHeight = window.innerHeight;
      console.log(deltaY, pageHeight);
      if (deltaY > 0) {
        if (
          scrollTop !== undefined &&
          scrollTop >= 0 &&
          scrollTop < pageHeight
        ) {
          console.log("현재 1페이지");
          scrollRef.current?.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
    const scrollHandler = (e: any) => {
      e.preventDefault();
      console.log(window.scrollY);
    };
    const scrollRefCurrent = scrollRef.current;
    scrollRefCurrent?.addEventListener("scroll", scrollHandler);
    scrollRefCurrent?.addEventListener("wheel", wheelHandler);
    return () => {
      scrollRefCurrent?.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <ShortsWrapperDiv ref={scrollRef}>
      {shortsData.map((e, i) => (
        <ShortsVideoAreaDiv key={i}>
          <ShortsVideoWrapper data={e} />
        </ShortsVideoAreaDiv>
      ))}
    </ShortsWrapperDiv>
  );
};

export default Shorts;
