/** @jsxImportSource @emotion/react */
import Shorts from "./component/Shorts";
import { css } from "@emotion/react";

const SingleShorts = ({ shortsId }: { shortsId: number }) => {
  console.log(shortsId);
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Shorts id={shortsId} />
      </div>
    </div>
  );
};

export default SingleShorts;
