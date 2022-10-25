import { LogoNameStyle } from "../../../styles/welcome"
import Title from "../../../../../assets/title/title.png"
import styled from "@emotion/styled"
function LogoName(){
    return(
        <LogoNameStyle>
             <TitleImg src={Title} />
        </LogoNameStyle>
    )
}
const TitleImg = styled.img`
    width: 65%;

`
export default LogoName