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
  return (
    <MyHipContentCardWrapperDiv>
      <Card width="95%" height="8vh">
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
