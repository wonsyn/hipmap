import Card from "../../../../components/card/Card";
import { ImgContainer } from "../../styles/ImgStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow() {
  return <div style={{ display: "none" }} />;
}

const Slide = () => {
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
  return (
    <div>
      <Slider {...autoPlayState}>
        <Card
          width="30vw"
          height="13vh"
          overflow="hidden"
          display="flex"
          align_items="center"
          justify_content="center"
          background="black"
        >
          <ImgContainer src="/img/1.jpg" alt="그림" />
        </Card>
        <Card
          width="30vw"
          height="13vh"
          overflow="hidden"
          display="flex"
          align_items="center"
          justify_content="center"
          background="black"
        >
          <ImgContainer src="/img/2.png" alt="그림" />
        </Card>
        <Card
          width="30vw"
          height="13vh"
          overflow="hidden"
          display="flex"
          align_items="center"
          justify_content="center"
          background="black"
        >
          <ImgContainer src="/img/3.png" alt="그림" />
        </Card>
        <Card
          width="30vw"
          height="13vh"
          overflow="hidden"
          display="flex"
          align_items="center"
          justify_content="center"
          background="black"
        >
          <ImgContainer src="/img/4.png" alt="그림" />
        </Card>
        <Card
          width="30vw"
          height="13vh"
          overflow="hidden"
          display="flex"
          align_items="center"
          justify_content="center"
          background="black"
        >
          <ImgContainer src="/img/5.jpg" alt="그림" />
        </Card>
        <Card
          width="30vw"
          height="13vh"
          overflow="hidden"
          display="flex"
          align_items="center"
          justify_content="center"
          background="black"
        >
          <ImgContainer src="/img/6.jpg" alt="그림" />
        </Card>
      </Slider>
    </div>
  );
};

export default Slide;
