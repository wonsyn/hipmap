/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMediaQuery } from "@material-ui/core";
import Card from "../../../../components/card/Card";
import { SameHipPlaceCardWrapperDiv } from "../../styles/sameHipPlace";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveSameLabelingCheck } from "../../../../store/hipMap/hipMapStore";

const SameHipPlaceCardWrapper = ({
  data,
}: {
  data: {
    shortsList: {
      thumbnailSrc: string;
      shortsId: number;
    }[];
  };
}) => {
  const isMobile = useMediaQuery("(max-width:1024px)");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function ClickEvent(){
    dispatch(saveSameLabelingCheck())
    setTimeout(() => {
      navigate(`/hipmap/fullmap`, {
        state: {
          sameHipPlace: true
        }
      })
    }, 1);
  }
  console.log("데이터?", data);

  return (
    <SameHipPlaceCardWrapperDiv onClick={ClickEvent}>
      {data.shortsList[0] && (
        <Card
          width="50vh"
          height={isMobile ? "25vh" : "30vh"}
          overflow="hidden"
          justify_content="center"
          align_items="center"
          display="flex"
        >
          <img
            src={data.shortsList[0].thumbnailSrc}
            alt="사진"
            css={css`
              width: 200%;
            `}
          />
        </Card>
      )}
      {data.shortsList[1] && (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin-left: 2%;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-bottom: 2%;
            `}
          >
            <Card
              width={isMobile ? "40vw" : "20vw"}
              height={isMobile ? "12vh" : "15vh"}
              overflow="hidden"
              align_items="center"
              justify_content="center"
              display="flex"
            >
              <img
                src={data.shortsList[1].thumbnailSrc}
                alt="사진"
                css={css`
                  width: 200%;
                `}
              />
            </Card>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 2%;
            `}
          >
            {data.shortsList[2] && (
              <Card
                width={isMobile ? "40vw" : "20vw"}
                height={isMobile ? "12vh" : "15vh"}
                overflow="hidden"
                align_items="center"
                justify_content="center"
                display="flex"
              >
                <img
                  src={data.shortsList[2].thumbnailSrc}
                  alt="사진"
                  css={css`
                    width: 200%;
                  `}
                />
              </Card>
            )}
          </div>
        </div>
      )}
    </SameHipPlaceCardWrapperDiv>
  );
};

export default SameHipPlaceCardWrapper;
