import { useMediaQuery } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Card from "../../../../components/card/Card";
import { useAppSelector } from "../../../../hoc/useStoreHooks";
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
  const navigator = useNavigate();
  const userId = useAppSelector((store) => store.userReducer.user.user_id);
  const isMobile = useMediaQuery("(max-width:1024px)");
  return (
    <MyHipContentCardWrapperDiv>
      <Card width="90%" height={isMobile ? "8vh" : "35vh"}>
        <MyHipContentWrapperDiv
          onClick={() => {
            navigator("/myProfile/" + userId);
          }}
        >
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
