import { TieStyle } from "../../styles/welcome"
import { ImgContainer } from "../../../main/styles/ImgStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import labelTie from "../../../../assets/labeling/welcome/labelTie.png"

function SampleNextArrow() {
    return <div style={{ display: "none" }} />;
  }
function Tie(){
    const autoPlayState = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
      };

    return(
        <TieStyle>
           <Slider {...autoPlayState}>
                <ImgContainer src={labelTie} alt="그림" />
                <ImgContainer src={labelTie} alt="그림" />
                <ImgContainer src={labelTie} alt="그림" />
                <ImgContainer src={labelTie} alt="그림" />
                <ImgContainer src={labelTie} alt="그림" />       
            </Slider>
        </TieStyle>
    )
}

export default Tie
