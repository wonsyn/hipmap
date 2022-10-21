import { CommonButtonWrapper } from "../../styles/button";

interface ButtonProps {
  width: string;
  height: string;
  color: string;
  onClick: () => void;
  children: JSX.Element;
}

const CommonButton = ({
  width,
  height,
  color,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <CommonButtonWrapper
      width={width}
      height={height}
      color={color}
      onClick={onClick}
    >
      {children}
    </CommonButtonWrapper>
  );
};

export default CommonButton;
