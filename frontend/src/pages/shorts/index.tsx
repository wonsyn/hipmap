import { useState } from "react";
import { FullPage, Slide } from "react-full-page";
import CommentsWrapper from "../../components/comments";
import ShortsVideoWrapper from "./component/ShortsVideoWrapper";
import Modal from "../../components/modal/Modal";
import {
  CommentModalCloseHandlerDiv,
  CommentModalInfoWrapperDiv,
  ShortsVideoAreaDiv,
  ShortsVideoElementWrapperDiv,
  ShortsVideoModalWrapper,
  ShortsWrapperDiv,
} from "./styles/shortsStyle";
import { useMediaQuery } from "@material-ui/core";

interface shortsInterface {
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
}

const dummyData: shortsInterface[] = [
  {
    shorts_id: 1,
    file_src: "movie/phone.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 2,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 3,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 4,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 5,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 6,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 7,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 8,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 9,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 10,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
];

const Shorts = () => {
  const [shortsData, setShortsData] = useState<shortsInterface[]>(dummyData);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [shortsId, setShortsId] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevScroll, setPrevScroll] = useState<number>(0);
  const isMobile = useMediaQuery("(max-width:699px)");

  const getCurrentIndex = () => {
    console.log(prevScroll, window.scrollY);
    const scroll = window.scrollY;
    if (prevScroll < scroll) {
      setCurrentIndex((prev) => {
        return prev + 1;
      });
      setPrevScroll((prev) => {
        return scroll;
      });
    } else if (prevScroll > scroll) {
      setCurrentIndex((prev) => {
        return prev - 1;
      });
      setPrevScroll((prev) => {
        return scroll;
      });
    }
  };

  const modalOpen = (e: number) => {
    setShortsId(e);
    setIsModalOpen((prev) => {
      return !prev;
    });
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <ShortsWrapperDiv>
      <ShortsVideoAreaDiv id="list" isModalOpen={isModalOpen}>
        {!isModalOpen ? (
          <FullPage initialSlide={currentIndex} afterChange={getCurrentIndex}>
            {shortsData &&
              shortsData.map((e: shortsInterface, i) => (
                <Slide key={i}>
                  <ShortsVideoElementWrapperDiv>
                    <ShortsVideoWrapper shorts={e} modalOpen={modalOpen} />
                  </ShortsVideoElementWrapperDiv>
                </Slide>
              ))}
          </FullPage>
        ) : (
          <Modal
            modalHandler={modalClose}
            width={isMobile ? "90%" : "700px"}
            height="85%"
            backgroundcolor="#222222"
            color="white"
          >
            <ShortsVideoModalWrapper>
              <CommentModalInfoWrapperDiv>
                <div>댓글</div>
                <CommentModalCloseHandlerDiv onClick={modalClose}>
                  닫기
                </CommentModalCloseHandlerDiv>
              </CommentModalInfoWrapperDiv>
              <CommentsWrapper shortsId={shortsId}></CommentsWrapper>
            </ShortsVideoModalWrapper>
          </Modal>
        )}
      </ShortsVideoAreaDiv>
    </ShortsWrapperDiv>
  );
};

export default Shorts;
