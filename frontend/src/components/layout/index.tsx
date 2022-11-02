import {
  LayoutContainer,
  MainContainer,
  MainWrapperDiv,
} from "../../styles/layout";
import Header from "./header";
import Footer from "./navBar";
import { useMediaQuery } from "@material-ui/core";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const isMobile = useMediaQuery("(max-width:700px)");
  return (
    <LayoutContainer>
      <Header></Header>
      <MainContainer>
        <MainWrapperDiv>{children}</MainWrapperDiv>
      </MainContainer>
      {isMobile && <Footer></Footer>}
    </LayoutContainer>
  );
};

export default Layout;
