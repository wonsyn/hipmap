import { useMediaQuery } from "@material-ui/core";
import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import { useFetchMyShorts } from "../../../hoc/useFetch";
import { useAppSelector } from "../../../hoc/useStoreHooks";
import SingleShorts from "../../singleShorts";
import {
  MyPagePostDiv,
  MyPagePostImg,
  MyPagePostWrapperUl,
} from "../styles/MyPagePost";

interface shorts {
  thumbnailSrc: string;
  shortsId: number;
}

const MyPagePostWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectId, setSelectId] = useState<number>();
  const isMobile = useMediaQuery("(max-width:1023px)");
  console.log(isMobile);
  const myInfo = useAppSelector((store) => store.userReducer.user.username);
  const { data: MyPagePost, isLoading } = useFetchMyShorts(myInfo);
  console.log(MyPagePost);
  if (isLoading) {
    return <div>로딩중...</div>;
  } else if (!isLoading && MyPagePost && MyPagePost.length > 0) {
    return (
      <MyPagePostWrapperUl>
        {isModalOpen && selectId !== undefined && (
          <Modal
            width={isMobile ? "80%" : "1024px"}
            height="80%"
            modalHandler={() => {
              setIsModalOpen((prev) => {
                return !prev;
              });
            }}
          >
            <SingleShorts shortsId={selectId} />
          </Modal>
        )}
        {MyPagePost?.map((e: shorts, i: number) => (
          <MyPagePostDiv
            key={i}
            onClick={() => {
              setIsModalOpen((prev) => {
                return !prev;
              });
              setSelectId(e.shortsId);
            }}
          >
            <MyPagePostImg src={e.thumbnailSrc} alt="썸네일" />
          </MyPagePostDiv>
        ))}
      </MyPagePostWrapperUl>
    );
  } else if (!isLoading && MyPagePost && MyPagePost.length === 0) {
    return <h2>작성한 게시물이 없습니다...</h2>;
  } else {
    return <div>데이터를 가져오는데 문제가 발생했습니다.</div>;
  }
};

export default MyPagePostWrapper;
