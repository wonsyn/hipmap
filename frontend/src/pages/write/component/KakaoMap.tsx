/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { css } from "@emotion/react";

interface addressType {
  si: string;
  gu: string | null;
  gun: string | null;
}

const KakaoMap = () => {
  const [position, setPosition] = useState<any>();
  const [address, setAddress] = useState<addressType>();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 500px;
        margin-bottom: 500px;
      `}
    >
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) => {
          setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          });
          const geocoder = new kakao.maps.services.Geocoder();
          geocoder.coord2Address(
            mouseEvent.latLng.getLng(),
            mouseEvent.latLng.getLat(),
            function (result, status) {
              console.log(result);
              if (status === kakao.maps.services.Status.OK) {
                setAddress((prev) => {
                  return {
                    si: result[0].address.region_1depth_name,
                    gu: result[0].address.region_2depth_name,
                    gun: result[0].address.region_3depth_name,
                  };
                });
              }
            }
          );
        }}
      >
        {position && <MapMarker position={position} />}
      </Map>
      {position && (
        <p>
          클릭한 곳의 위도는 {position.lat} 경도는 {position.lng} 주소는
          {address?.si} {address?.gu} {address?.gun}
        </p>
      )}
    </div>
  );
};

export default KakaoMap;
