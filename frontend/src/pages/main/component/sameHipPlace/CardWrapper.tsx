/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMediaQuery } from "@material-ui/core";
import Card from "../../../../components/card/Card";
import { SameHipPlaceCardWrapperDiv } from "../../styles/sameHipPlace";

const SameHipPlaceCardWrapper = () => {
  const isMobile = useMediaQuery("(max-width:1024px)");
  return (
    <SameHipPlaceCardWrapperDiv>
      <Card
        width="50vh"
        height={isMobile ? "25vh" : "30vh"}
        overflow="hidden"
        justify_content="center"
        align_items="center"
        display="flex"
      >
        <img
          src="/img/1.jpg"
          alt="사진"
          css={css`
            width: 200%;
          `}
        />
      </Card>
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
              src="/img/2.png"
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
          <Card
            width={isMobile ? "40vw" : "20vw"}
            height={isMobile ? "12vh" : "15vh"}
            overflow="hidden"
            align_items="center"
            justify_content="center"
            display="flex"
          >
            <img
              src="/img/6.jpg"
              alt="사진"
              css={css`
                width: 200%;
              `}
            />
          </Card>
        </div>
      </div>
    </SameHipPlaceCardWrapperDiv>
  );
};

export default SameHipPlaceCardWrapper;
