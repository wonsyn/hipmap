import { LayoutContainer, MainContainer } from "../../styles/layout";
import Header from "./header";
import Footer from "./navBar";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Header></Header>
      <MainContainer>{children}</MainContainer>
      <Footer></Footer>
    </LayoutContainer>
  );
};

export default Layout;
