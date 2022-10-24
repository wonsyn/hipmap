import { CommonButtonWrapper } from "../../styles/button";

interface ButtonProps {
  width: string;
  height: string;
  color: string;
  background: string;
  onClick: (e: any) => void | {};
  children: JSX.Element;
  border_radius: string;
}

const CommonButton = ({
  width,
  height,
  color,
  onClick,
  children,
  background,
  border_radius,
}: ButtonProps) => {
  return (
    <CommonButtonWrapper
      width={width}
      height={height}
      color={color}
      background={background}
      onClick={onClick}
      border_radius={border_radius}
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
  border_radius: "8px",
};
