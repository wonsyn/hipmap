/** @jsxImportSource @emotion/react */
import Card from "../../../../components/card/Card";
import { ImgContainer } from "../../styles/ImgStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Modal from "../../../../components/modal/Modal";
import { useMediaQuery } from "@material-ui/core";
import SingleShorts from "../../../singleShorts";
import { MyPagePostDiv } from "../../../myPage/styles/MyPagePost";

function SampleNextArrow() {
  return <div style={{ display: "none" }} />;
}

const Slide = ({
  data,
}: {
  data: {
    shortsList: {
      shortsId: number;
      likeCnt: number;
      thumbnailSrc: string;
    }[];
  };
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectId, setSelectId] = useState<number | undefined>();
  const isMobile = useMediaQuery("(max-width:1023px)");
  const autoPlayState = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };

  useEffect(() => {
    if (!isModalOpen) {
      setSelectId(undefined);
    }
  }, [isModalOpen, selectId]);

  return (
    <div>
      {isModalOpen && selectId !== undefined && (
        <Modal
          width={isMobile ? "80%" : "1024px"}
          height="80%"
          modalHandler={() => {
            setIsModalOpen((prev) => {
              return !prev;
            });
            setSelectId(undefined);
          }}
        >
          <SingleShorts shortsId={selectId} />
        </Modal>
      )}
      <Slider {...autoPlayState}>
        {data.shortsList.map((e, i) => (
          <div
            css={css`
              height: 13vh;
              @media (min-width: 1024px) {
                height: 20vh;
              }
            `}
            key={i}
          >
            <Card
              width="100%"
              height="100%"
              overflow="hidden"
              display="flex"
              align_items="center"
              justify_content="center"
              background="black"
            >
              <ImgContainer
                onClick={() => {
                  setIsModalOpen((prev) => {
                    return !prev;
                  });
                  setSelectId(e.shortsId);
                  console.log(e.shortsId);
                }}
                src={e.thumbnailSrc}
                alt="베스트 힙 플레이스"
              />
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
