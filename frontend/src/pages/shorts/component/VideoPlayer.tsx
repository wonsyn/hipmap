import { useRef } from "react";
import { useIsVideoLoaded } from "../../../hoc/useIsVideoLoaded";
import {
  ShortsVideoPlayerVideo,
  ShortsVideoPlayerWrapperDiv,
} from "../styles/shortsStyle";
const ShortsVideoPlayer = ({ file_src }: { file_src: string }) => {
  const lazy = true;
  const { videoRef, isLoaded } = useIsVideoLoaded(lazy);
  const elementRef = useRef<HTMLVideoElement>(null);

  return (
    <ShortsVideoPlayerWrapperDiv ref={videoRef}>
      {isLoaded ? (
        <ShortsVideoPlayerVideo ref={elementRef} muted loop autoPlay>
          <source src={file_src} type="video/mp4"></source>
        </ShortsVideoPlayerVideo>
      ) : (
        <div>isLoading....</div>
      )}
    </ShortsVideoPlayerWrapperDiv>
  );
};

export default ShortsVideoPlayer;
