import { useEffect, useRef, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import ShortsVideoWrapper from "./component/ShortsVideoWrapper";
import { ShortsVideoAreaDiv, ShortsWrapperDiv } from "./styles/shortsStyle";

interface shortsInterface {
  shorts_id: number;
  file_src: string;
  thumbnail_src: string;
  location_si: string;
  location_gu: string;
  location_dong: string;
  create_time: string;
  like_count: number;
  hate_count: number;
  comments_count: number;
  is_like: number;
  file_type: number;
}

const dummyData: shortsInterface[] = [
  {
    shorts_id: 1,
    file_src: "movie/phone.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 2,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 3,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 4,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 5,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 6,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 7,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 8,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 9,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
  {
    shorts_id: 10,
    file_src: "https://hipmap.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",
    thumbnail_src: "/img/1.jpg",
    location_si: "대전광역시",
    location_gu: "유성구",
    location_dong: "덕명동",
    create_time: "2022-09-10",
    like_count: 300,
    hate_count: 100,
    comments_count: 100,
    is_like: 0,
    file_type: 0,
  },
];

const Shorts = () => {
  const [shortsData, setShortsData] = useState<shortsInterface[]>(dummyData);
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <ShortsWrapperDiv>
      <ShortsVideoAreaDiv id="list">
        <FullPage>
          {shortsData &&
            shortsData.map((e: shortsInterface, i) => (
              <Slide key={i}>
                <ShortsVideoAreaDiv>
                  <ShortsVideoWrapper shorts={e} />
                </ShortsVideoAreaDiv>
              </Slide>
            ))}
        </FullPage>
      </ShortsVideoAreaDiv>
    </ShortsWrapperDiv>
  );
};

export default Shorts;
