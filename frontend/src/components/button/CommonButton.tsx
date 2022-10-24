import { CommonButtonWrapper } from "../../styles/button";

interface ButtonProps {
  width: string;
  height: string;
  color: string;
  background: string;
  onClick: (e: any) => void | {};
  children: JSX.Element;
}

const CommonButton = ({
  width,
  height,
  color,
  onClick,
  children,
  background,
}: ButtonProps) => {
  return (
    <CommonButtonWrapper
      width={width}
      height={height}
      color={color}
      background={background}
      onClick={onClick}
    >
      {children}
    </CommonButtonWrapper>
  );
};

export default CommonButton;

CommonButton.defaultProps = {
  width: "10vw",
  height: "5vh",
  color: "black",
  background: "white",
};
