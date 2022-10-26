import { MyInfoDiv, MyInfoWrapperDiv } from "../styles/MyInfoWrapperStyle";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const MyInfoWrapper = () => {
  const userInfo = useSelector((store: RootState) => store.userReducer.user);
  console.log(userInfo);
  return (
    <MyInfoWrapperDiv>
      <MyInfoDiv>
        <div>
          <AccountCircleIcon fontSize="large" />
        </div>
        <div>{userInfo.nickname}</div>
        <div>{userInfo.labeling}</div>
      </MyInfoDiv>
    </MyInfoWrapperDiv>
  );
};

export default MyInfoWrapper;
