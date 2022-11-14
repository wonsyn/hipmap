/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { css } from "@emotion/react";
import { useMediaQuery } from "@material-ui/core";

interface addressType {
  si: string;
  gu: string | null;
  gun: string | null;
}

interface positionInfo {
  lat: number;
  lng: number;
  setPosition: (e: any) => void;
}

const KakaoMap = ({ lat, lng, setPosition }: positionInfo) => {
  const isMobile = useMediaQuery("(min-width:700px)");
  const [position, setPositionProps] = useState<any>({
    lat: lat,
    lng: lng,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [address, setAddress] = useState<addressType>();
  // const mapRef = useRef<any>();

  console.log(lat, lng);
  useEffect(() => {
    if (address) {
      setPosition({
        lat: position.lat,
        lng: position.lng,
        si: address.si,
        gu: address.gu,
        gun: address.gun,
      });
    }
  }, [position, address, setPosition, lat, lng]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: auto;
        & #react-kakao-maps-sdk-map-container {
          z-index: 0;
        }
      `}
    >
      <h2
        css={css`
          margin-bottom: 3%;
        `}
      >
        이 장소의 위치는 여기인가요?
      </h2>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: lat,
          lng: lng,
        }}
        style={{
          // 지도의 크기
          width: "300px",
          height: "350px",
        }}
        onCreate={(map: kakao.maps.Map) => {
          if (isLoading) {
            const geocoder = new kakao.maps.services.Geocoder();
            geocoder.coord2Address(lng, lat, function (result, status) {
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
            });
            setIsLoading(false);
          }
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) => {
          setPositionProps({
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
        <p
          css={css`
            margin-top: 2vh;
            font-size: 1.2rem;
          `}
        >
          현재 좌표는 {position.lat} {position.lng} {address?.si} {address?.gu}{" "}
          {address?.gun} 입니다!
        </p>
      )}
    </div>
  );
};

export default KakaoMap;
