import { useMediaQuery } from "@material-ui/core";
import Card from "../../../../components/card/Card";
import {
  MyHipContentCardWrapperDiv,
  MyHipContentImg,
  MyHipContentTextDiv,
  MyHipContentWrapperDiv,
} from "../../styles/MyHip";

interface MyHipContainerProps {
  content: {
    shortsId: number;
    thumbnailSrc: string;
  }[];
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
            src={content[0].thumbnailSrc}
            alt="사진"
          />
        </MyHipContentWrapperDiv>
      </Card>
    </MyHipContentCardWrapperDiv>
  );
};

export default MyHipContent;
