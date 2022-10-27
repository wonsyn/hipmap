import MyInfoWrapper from "./component/MyInfoWrapper";
import MyPagePostWrapper from "./component/myPagePostWrapper";
import { MyPageDiv } from "./styles/MyInfoWrapperStyle";

const MyPage = () => {
  return (
    <MyPageDiv>
      <MyInfoWrapper></MyInfoWrapper>
      <MyPagePostWrapper />
    </MyPageDiv>
  );
};

export default MyPage;
