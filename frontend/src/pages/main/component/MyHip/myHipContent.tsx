import { useMediaQuery } from "@material-ui/core";
import Card from "../../../../components/card/Card";
import {
  MyHipContentCardWrapperDiv,
  MyHipContentImg,
  MyHipContentTextDiv,
  MyHipContentWrapperDiv,
} from "../../styles/MyHip";

interface shorts {
  thumbnail_src: string;
  shortsId: number;
}

interface MyHipContainerProps {
  content: {
    shortsList: shorts[];
  };
  text: string;
}

const MyHipContent = ({ content, text }: MyHipContainerProps) => {
  const isMobile = useMediaQuery("(max-width:1024px)");
  return (
    <MyHipContentCardWrapperDiv>
      <Card width="90%" height={isMobile ? "8vh" : "35vh"}>
        <MyHipContentWrapperDiv>
          <MyHipContentTextDiv>{text}</MyHipContentTextDiv>
          <MyHipContentImg
            rightPercent={0}
            src={content.shortsList[0].thumbnail_src}
            alt="사진"
          />
        </MyHipContentWrapperDiv>
      </Card>
    </MyHipContentCardWrapperDiv>
  );
};

export default MyHipContent;
