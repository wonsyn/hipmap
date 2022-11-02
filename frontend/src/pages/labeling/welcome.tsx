import styled from "@emotion/styled"
import Tie from "./component/welcome/tie"
import LogoName from "./component/welcome/logoName"
import Character from "./component/welcome/character"
import Announcement from "./component/welcome/announcement/indexl"
import StartButton from "./component/welcome/startButton"
import welcomePage from "../../assets/labeling/welcome/welcomePage.jpg";

function WelcomePage() {
    return (
        <Wrapper>
            <Container>
                <Tie/>
                <LogoName/>
                <Character/>
                <Announcement/>
                <StartButton/>
            </Container>
        </Wrapper>
        
    )
}; 

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    max-width: 500px;
    height: 92vh;
    ::before{
        width: 100vw;
        max-width: 500px;
        height: 92vh;
        content: "";
        position: absolute;
        z-index: -1;
        background-image: url(${welcomePage});
        background-repeat : no-repeat;
        background-size : cover;
        opacity: 0.5; 
    }
`

export default WelcomePage