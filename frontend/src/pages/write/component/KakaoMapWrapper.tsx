/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import KakaoMap from "./KakaoMap";

interface positionInfo {
  lat: number;
  lng: number;
}

const KakaoMapWrapper = ({
  setPosition,
}: {
  setPosition: (e: any) => void;
}) => {
  const [userPosition, setUserPosition] = useState<positionInfo>();
  console.log(userPosition);
  useEffect(() => {
    if (navigator.geolocation) {
      console.log("aaaaaa");
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const latitude = pos.coords.latitude;
          const longtitude = pos.coords.longitude;

          console.log("geolocation", pos.coords);
          setUserPosition((prev) => {
            return {
              lat: latitude,
              lng: longtitude,
            };
          });
        },
        () => {
          setUserPosition((prev) => {
            return {
              lat: 33.450701,
              lng: 126.570667,
            };
          });
        }
      );
    } else {
      alert("현재 위치를 찾을 수 없습니다.");
      setUserPosition((prev) => {
        return {
          lat: 33.450701,
          lng: 126.570667,
        };
      });
    }
  }, []);
  return (
    <div
      css={css`
        width: 100%;
        height: 500px;
      `}
    >
      {userPosition && (
        <KakaoMap
          lat={userPosition.lat}
          lng={userPosition.lng}
          setPosition={setPosition}
        />
      )}
    </div>
  );
};

export default KakaoMapWrapper;
