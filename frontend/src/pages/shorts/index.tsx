import { useEffect, useState } from "react";
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
import { useFetchShortsInfinite } from "../../hoc/useFetch";
import { MyButton } from "../myPage/styles/MyInfoWrapperStyle";
import { useQueryClient } from "@tanstack/react-query";

const Shorts = () => {
  const [nextPage, setNextPage] = useState<number>(-1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [shortsId, setShortsId] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevScroll, setPrevScroll] = useState<number>(0);
  const [isNext, setIsNext] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width:699px)");
  const [test, setTest] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const {
    data: shortsData,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useFetchShortsInfinite();

  console.log(test);
  console.log(nextPage);
  console.log(shortsData);

  useEffect(() => {
    console.log("ddkdkd");
    if (shortsData && shortsData?.pages.length > 1) {
      setNextPage((prev) => {
        return prev + 1;
      });
      setCurrentIndex(0);
      setIsNext(true);
    } else if (nextPage === -1) {
      setNextPage(0);
    }
  }, [shortsData?.pages.length]);

  useEffect(() => {
    if (isNext) {
      setIsNext(false);
    }
  }, [isNext]);
  console.log(isNext);
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
  if (shortsData && nextPage >= 0) {
    return (
      <ShortsWrapperDiv>
        {!isNext && (
          <ShortsVideoAreaDiv id="list" isModalOpen={isModalOpen}>
            {!isModalOpen ? (
              <FullPage
                initialSlide={currentIndex}
                afterChange={getCurrentIndex}
              >
                {shortsData &&
                  shortsData.pages[nextPage].result.shortsList.map((e, i) => (
                    <Slide key={i}>
                      <ShortsVideoElementWrapperDiv>
                        <ShortsVideoWrapper
                          refetch={refetch}
                          shorts={e}
                          modalOpen={modalOpen}
                        />
                      </ShortsVideoElementWrapperDiv>
                    </Slide>
                  ))}
                <Slide>
                  <ShortsVideoElementWrapperDiv>
                    <h1>대기열이 끝났습니다.</h1>
                    <MyButton
                      disabled={!hasNextPage}
                      onClick={() => {
                        fetchNextPage();
                      }}
                    >
                      다음페이지
                    </MyButton>
                  </ShortsVideoElementWrapperDiv>
                </Slide>
              </FullPage>
            ) : (
              <Modal
                modalHandler={modalClose}
                width={isMobile ? "90%" : "700px"}
                height="90%"
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
        )}
      </ShortsWrapperDiv>
    );
  } else {
    return <div>로딩중...</div>;
  }
};

export default Shorts;
