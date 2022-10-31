import {
  LocationDiv,
  ShortsVideoDiv,
  ShortsVideoElementDiv,
  ShortsVoteCommentWrapperDiv,
  ShortVoteDiv,
} from "../styles/shortsStyle";
import ReactPlayer from "react-player/lazy";
import { useState, useEffect } from "react";
import ShortsVideoPlayer from "./VideoPlayer";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CommentIcon from "@mui/icons-material/Comment";

interface shortsInterface {
  shorts: {
    shorts_id: number;
    file_src: string;
    thumbnail_src: string;
    location_si: string;
    location_gu: string;
    location_dong: string;
    create_time: string;
    like_count: number;
    hate_count: number;
    comments_count: number;
    is_like: number;
    file_type: number;
  };
}

const ShortsVideoWrapper = ({ shorts }: shortsInterface) => {
  const [location, setLocation] = useState<string>(
    shorts.location_si + " " + shorts.location_gu + " " + shorts.location_dong
  );
  return (
    <ShortsVideoElementDiv>
      <ShortsVideoDiv>
        <ShortsVideoPlayer file_src={shorts.file_src} />
        <LocationDiv>{location}</LocationDiv>
        <ShortsVoteCommentWrapperDiv>
          <ShortVoteDiv>
            <ThumbUpOffAltIcon fontSize="medium"></ThumbUpOffAltIcon>
            {shorts.like_count}
          </ShortVoteDiv>
          <ShortVoteDiv>
            <ThumbDownOffAltIcon fontSize="medium"></ThumbDownOffAltIcon>
            {shorts.hate_count}
          </ShortVoteDiv>
          <ShortVoteDiv>
            <CommentIcon fontSize="medium"></CommentIcon>
            {shorts.comments_count}
          </ShortVoteDiv>
        </ShortsVoteCommentWrapperDiv>
      </ShortsVideoDiv>
    </ShortsVideoElementDiv>
  );
};

export default ShortsVideoWrapper;
