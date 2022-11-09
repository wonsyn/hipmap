import {
  LocationDiv,
  ShortsVideoDiv,
  ShortsVideoElementDiv,
  ShortsVoteCommentWrapperDiv,
  ShortVoteDiv,
} from "../styles/shortsStyle";
import { useEffect, useState } from "react";
import ShortsVideoPlayer from "./VideoPlayer";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import {
  useFirstLikeVote,
  useLikeDelete,
  useLikeVote,
} from "../../../hoc/useMutation";
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
  const [location, setLocation] = useState<string>();
  const [isLike, setIsLike] = useState<boolean>(false);
  const [disLike, setDisLike] = useState<boolean>(false);

  const { mutate: firstVote } = useFirstLikeVote();
  const { mutate: likeVote } = useLikeVote();
  const { mutate: deleteVote } = useLikeDelete();

  useEffect(() => {
    if (shorts.isLike === "love") {
      setIsLike(true);
      setDisLike(false);
    } else if (shorts.isLike === "hate") {
      setIsLike(false);
      setDisLike(false);
    } else {
      setIsLike(false);
      setDisLike(false);
    }
  }, [shorts?.isLike]);

  useEffect(() => {
    const si = shorts.locationSi;
    const gu = shorts.locationGu;
    const dong = shorts.locationDong;
    setLocation(si + " " + gu + " " + dong);
  }, []);

  const commentHander = () => {
    modalOpen(shorts.shortsId);
  };

  return (
    <ShortsVideoElementDiv>
      <ShortsVideoDiv>
        <ShortsVideoPlayer file_src={shorts.fileSrc} />
        <LocationDiv>{location}</LocationDiv>
        <ShortsVoteCommentWrapperDiv>
          <ShortVoteDiv
            onClick={() => {
              if (shorts.isLike === "none") {
                firstVote({ id: shorts.shortsId, vote: true });
              } else if (shorts.isLike === "love") {
                deleteVote({ id: shorts.shortsId });
              } else {
                likeVote({ id: shorts.shortsId, vote: true });
              }
            }}
          >
            {isLike ? (
              <ThumbUpAltIcon sx={{ fontSize: 40 }} />
            ) : (
              <ThumbUpOffAltIcon sx={{ fontSize: 40 }}></ThumbUpOffAltIcon>
            )}
            {shorts.likeCount}
          </ShortVoteDiv>
          <ShortVoteDiv
            onClick={() => {
              if (shorts.isLike === "none") {
                firstVote({ id: shorts.shortsId, vote: false });
              } else if (shorts.isLike === "hate") {
                deleteVote({ id: shorts.shortsId });
              } else {
                likeVote({ id: shorts.shortsId, vote: false });
              }
            }}
          >
            {disLike ? (
              <ThumbDownAltIcon sx={{ fontSize: 40 }} />
            ) : (
              <ThumbDownOffAltIcon sx={{ fontSize: 40 }}></ThumbDownOffAltIcon>
            )}

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
