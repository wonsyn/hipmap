import { CharacterStyle } from "../../../styles/welcome";
import Logo from "../../../../../assets/logo/HipMapLogo.png"
import styled from "@emotion/styled";
function Character(){
    return(
        <CharacterStyle>
            <LogoImg src={Logo}/>
        </CharacterStyle>
    )
}
const LogoImg = styled.img`
    width: 60%;
`
export default Character