/** @jsxImportSource @emotion/react */
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
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import {
  useBookMarkAdd,
  useFirstLikeVote,
  useLikeDelete,
  useLikeVote,
} from "../../../hoc/useMutation";
import ColorAlerts from "./colorAlerts";
import { useQueryClient } from "@tanstack/react-query";
import ErrorAlerts from "./ErrorAlerts";
import { css } from "@emotion/react";

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
  refetch: () => void;
}

const ShortsVideoWrapper = ({
  shorts,
  modalOpen,
  refetch,
}: shortsInterface) => {
  const [location, setLocation] = useState<string>();
  const [isLike, setIsLike] = useState<boolean>(false);
  const [disLike, setDisLike] = useState<boolean>(false);
  //북마크 저장 성공 알림 띄우기용
  const [open, setOpen] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const { mutate: firstVote } = useFirstLikeVote();
  const { mutate: likeVote } = useLikeVote();
  const { mutate: deleteVote } = useLikeDelete();
  const { mutate: bookMark } = useBookMarkAdd();
  const queryClient = useQueryClient();
  const openHandler = () => {
    setOpen((prev) => {
      return !prev;
    });
    setContent((prev) => {
      return "";
    });
  };

  useEffect(() => {
    if (shorts.isLike === "love") {
      setIsLike(true);
      setDisLike(false);
    } else if (shorts.isLike === "hate") {
      setIsLike(false);
      setDisLike(true);
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
      {open && (
        <ColorAlerts open={open} openHandler={openHandler} content={content} />
      )}
      {errorOpen && (
        <ErrorAlerts
          open={errorOpen}
          openHandler={() => {
            setErrorOpen((prev) => {
              return !prev;
            });
          }}
        />
      )}
      <ShortsVideoDiv>
        {shorts.fileType === "video" ? (
          <ShortsVideoPlayer file_src={shorts.fileSrc} />
        ) : (
          <>
            {shorts.fileType === "image" && (
              <img
                css={css`
                  width: auto;
                  max-width: 100%;
                  height: auto;
                  max-height: 100%;
                `}
                src={shorts.fileSrc}
                alt="쇼츠이미지"
              />
            )}
          </>
        )}

        <LocationDiv>{location}</LocationDiv>
        <ShortsVoteCommentWrapperDiv>
          <div>
            <BookmarkAddIcon
              sx={{ fontSize: 25 }}
              onClick={() => {
                bookMark(
                  { shortsId: shorts.shortsId },
                  {
                    onSuccess: () => {
                      setContent("북마크 저장에 성공했습니다.");
                      setOpen(true);
                    },
                    onError: () => {
                      setErrorOpen(true);
                    },
                  }
                );
              }}
            />
          </div>
          <ShortVoteDiv
            onClick={() => {
              if (shorts.isLike === "none") {
                firstVote(
                  { id: shorts.shortsId, vote: true },
                  {
                    onSuccess: () => {
                      setContent("투표가 완료 되었습니다.");
                      setOpen(true);
                      refetch();
                    },
                    onError: () => {
                      setErrorOpen(true);
                    },
                  }
                );
              } else if (shorts.isLike === "love") {
                deleteVote(
                  { id: shorts.shortsId },
                  {
                    onSuccess: () => {
                      setContent("투표가 취소 되었습니다.");
                      setOpen(true);
                      refetch();
                    },
                    onError: () => {
                      setErrorOpen(true);
                    },
                  }
                );
              } else {
                likeVote(
                  { id: shorts.shortsId, vote: true },
                  {
                    onSuccess: () => {
                      setContent("투표가 완료 되었습니다.");
                      setOpen(true);
                      refetch();
                    },
                    onError: () => {
                      setErrorOpen(true);
                    },
                  }
                );
              }
            }}
          >
            {isLike ? (
              <ThumbUpAltIcon sx={{ fontSize: 25 }} />
            ) : (
              <ThumbUpOffAltIcon sx={{ fontSize: 25 }}></ThumbUpOffAltIcon>
            )}
            {shorts.likeCount}
          </ShortVoteDiv>
          <ShortVoteDiv
            onClick={() => {
              if (shorts.isLike === "none") {
                firstVote(
                  { id: shorts.shortsId, vote: false },
                  {
                    onSuccess: () => {
                      setContent("투표가 완료 되었습니다.");
                      setOpen(true);
                      refetch();
                    },
                    onError: () => {
                      setErrorOpen(true);
                    },
                  }
                );
              } else if (shorts.isLike === "hate") {
                deleteVote(
                  { id: shorts.shortsId },
                  {
                    onSuccess: () => {
                      setContent("투표가 취소 되었습니다.");
                      setOpen(true);
                      refetch();
                    },
                    onError: () => {
                      setErrorOpen(true);
                    },
                  }
                );
              } else {
                likeVote(
                  { id: shorts.shortsId, vote: false },
                  {
                    onSuccess: () => {
                      setContent("투표가 완료 되었습니다.");
                      setOpen(true);
                      refetch();
                    },
                    onError: () => {
                      setErrorOpen(true);
                    },
                  }
                );
              }
            }}
          >
            {disLike ? (
              <ThumbDownAltIcon sx={{ fontSize: 25 }} />
            ) : (
              <ThumbDownOffAltIcon sx={{ fontSize: 25 }}></ThumbDownOffAltIcon>
            )}

            {shorts.hateCount}
          </ShortVoteDiv>
          <ShortVoteDiv onClick={commentHander}>
            <CommentIcon sx={{ fontSize: 25 }}></CommentIcon>
            {shorts.commentsCount}
          </ShortVoteDiv>
        </ShortsVoteCommentWrapperDiv>
      </ShortsVideoDiv>
    </ShortsVideoElementDiv>
  );
};

export default ShortsVideoWrapper;
