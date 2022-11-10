import { useMediaQuery } from "@material-ui/core";
import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import {
  MyPagePostDiv,
  MyPagePostImg,
  MyPagePostWrapperUl,
} from "../../myPage/styles/MyPagePost";
import SingleShorts from "../../singleShorts";

const BookMarkShorts = ({
  bookmarkList,
}: {
  bookmarkList: {
    shortsId: number;
    thumbnailSrc: string;
    nickname: string;
  }[];
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectId, setSelectId] = useState<number>();
  const isMobile = useMediaQuery("(max-width:1023px)");
  console.log(bookmarkList);
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
      {bookmarkList.map((e, i) => (
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
};

export default BookMarkShorts;
