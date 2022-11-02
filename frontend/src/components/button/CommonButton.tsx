import { CommonButtonWrapper } from "../../styles/button";

interface ButtonProps {
  width: string;
  height: string;
  color: string;
  background: string;
  onClick: (e: any) => void | {};
  children: JSX.Element;
  border_radius: string;
  max_width: string;
}

const CommonButton = ({
  width,
  height,
  color,
  onClick,
  children,
  background,
  border_radius,
  max_width,
}: ButtonProps) => {
  return (
    <CommonButtonWrapper
      width={width}
      height={height}
      color={color}
      background={background}
      onClick={onClick}
      border_radius={border_radius}
      max-width={max_width}
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
  max_width: "",
};
