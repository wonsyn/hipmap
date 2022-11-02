import { Global, css } from "@emotion/react";

const style = css`
  * {
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
  }
  body {
    background-color: black;
    color: white;
  }
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
