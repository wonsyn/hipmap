import styled from "@emotion/styled";

export const LoginFormLoginInput = styled.input`
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid white;
  width: 85%;
  height: 3vh;
  margin-top: 3vh;
  color: white;
`;

export const LoginFormLoginWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 89vh;
  position: relative;
  margin: 0% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginFormLoginDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 25%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
`;

export const LoginFormBackgroundVideo = styled.video`
  height: 100%;
  opacity: 0.5;
  @media (min-width: 700px) {
    height: auto;
    position: fixed;
  }
`;

export const LogoWrapper = styled.img`
  background-color: white;
  position: absolute;
  top: 5vh;
  border-radius: 50%;
  max-width: 25%;
  @media (min-width: 400px) {
    max-width: 35%;
  }
  @media (min-width: 500px) {
    max-width: 25%;
  }
  @media (min-width: 600px) {
    max-width: 15%;
  }
`;

export const LoginFormLoginButton = styled.button`
  border-radius: 8px;
  color: black;
  background: ${(props) => props.theme.colors.subColorGreen};
  width: 300px;
  max-width: 300px;
  height: 10vh;
  max-height: 50px;
  margin-top: 15%;
  margin-bottom: 3%;
  font-size: 1.2rem;
  border: none;
  font-weight: bolder;
`;

export const LoginFormSignWrapperDiv = styled.div``;
