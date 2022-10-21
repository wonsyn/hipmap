import { CardContainer } from "./CardStyled";

interface CardProps {
  display: string;
  align_items: string;
  justify_content: string;
  overflow: string;
  color: string;
  border_radius: number;
  background: string;
  width: string;
  height: string;
  font_size: string;
  content: string;
  children: JSX.Element;
}

const Card = ({
  display,
  align_items,
  justify_content,
  overflow,
  color,
  border_radius,
  background,
  width,
  height,
  font_size,
  content,
  children,
}: CardProps) => {
  return (
    <CardContainer
      color={color}
      border_radius={border_radius}
      justify_content={justify_content}
      background={background}
      width={width}
      height={height}
      font_size={font_size}
      display={display}
      align_items={align_items}
      overflow={overflow}
    >
      {content}
      {children}
    </CardContainer>
  );
};

Card.defaultProps = {
  display: "",
  align_items: "",
  justify_content: "",
  overflow: "",
  color: "white",
  border_radius: 14,
  background: "linear-gradient(183.5deg, #FA2FB5, #CEEEEC)",
  width: "50vw",
  height: "50vh",
  font_size: "2rem",
  content: "",
  children: <div></div>,
};

export default Card;
