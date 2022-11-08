import {
  LocationDiv,
  ShortsVideoDiv,
  ShortsVideoElementDiv,
  ShortsVoteCommentWrapperDiv,
  ShortVoteDiv,
} from "../styles/shortsStyle";
import { useState } from "react";
import ShortsVideoPlayer from "./VideoPlayer";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CommentIcon from "@mui/icons-material/Comment";

interface shortsInterface {
  shorts: {
    commentsCount: number;
    createTime: string;
    fileSrc: string;
    fileType: string;
    hateCount: number;
    isLike: string;
    likeCount: number;
    locationDong: string | null;
    locationGu: string | null;
    locationSi: string | null;
    shortsId: number;
    thumbnailSrc: String | null;
  };
  modalOpen: (e: number) => void;
}

const ShortsVideoWrapper = ({ shorts, modalOpen }: shortsInterface) => {
  const [location, setLocation] = useState<string>(
    shorts.locationSi !== null
      ? shorts.locationSi + " "
      : " " + shorts.locationGu !== null
      ? shorts.locationGu + " "
      : " " + shorts.locationDong
      ? shorts.locationDong + " "
      : ""
  );

  const commentHander = () => {
    modalOpen(shorts.shortsId);
  };

  return (
    <ShortsVideoElementDiv>
      <ShortsVideoDiv>
        <ShortsVideoPlayer file_src={shorts.fileSrc} />
        <LocationDiv>{location}</LocationDiv>
        <ShortsVoteCommentWrapperDiv>
          <ShortVoteDiv>
            <ThumbUpOffAltIcon fontSize="medium"></ThumbUpOffAltIcon>
            {shorts.likeCount}
          </ShortVoteDiv>
          <ShortVoteDiv>
            <ThumbDownOffAltIcon fontSize="medium"></ThumbDownOffAltIcon>
            {shorts.hateCount}
          </ShortVoteDiv>
          <ShortVoteDiv onClick={commentHander}>
            <CommentIcon fontSize="medium"></CommentIcon>
            {shorts.commentsCount}
          </ShortVoteDiv>
        </ShortsVoteCommentWrapperDiv>
      </ShortsVideoDiv>
    </ShortsVideoElementDiv>
  );
};

export default ShortsVideoWrapper;
