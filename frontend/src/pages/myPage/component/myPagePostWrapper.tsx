import { useEffect, useState } from "react";
import {
  MyPagePostDiv,
  MyPagePostImg,
  MyPagePostWrapperUl,
} from "../styles/MyPagePost";

interface shorts {
  thumbnail_src: string;
  postId: number;
}

interface short {
  shorts: shorts;
  index: number;
}

const dummyDate = [
  {
    thumbnail_src: "/img/1.jpg",
    postId: 1,
  },
  {
    thumbnail_src: "/img/2.png",
    postId: 2,
  },
  {
    thumbnail_src: "/img/3.png",
    postId: 3,
  },
  {
    thumbnail_src: "/img/4.png",
    postId: 4,
  },
  {
    thumbnail_src: "/img/5.jpg",
    postId: 5,
  },
  {
    thumbnail_src: "/img/6.jpg",
    postId: 6,
  },
  {
    thumbnail_src: "/img/7.jpg",
    postId: 7,
  },
  {
    thumbnail_src: "/img/8.jpg",
    postId: 8,
  },
  {
    thumbnail_src: "/img/9.jpg",
    postId: 9,
  },

  {
    thumbnail_src: "/img/10.jpg",
    postId: 10,
  },
];

const MyPagePostWrapper = () => {
  const [MyPagePost, setMyPagePost] = useState<shorts[]>();

  // react-query로 변환할 예정
  useEffect(() => {
    setMyPagePost(dummyDate);
  }, []);
  return (
    <MyPagePostWrapperUl>
      {MyPagePost?.map((e: shorts, i: number) => (
        <MyPagePostDiv key={i}>
          <MyPagePostImg src={e.thumbnail_src} alt="썸네일" />
        </MyPagePostDiv>
      ))}
    </MyPagePostWrapperUl>
  );
};

export default MyPagePostWrapper;
