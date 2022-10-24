import { AnnouncementStyle } from "../../styles/welcome";
import AnnouncementText from "../../../../assets/labeling/welcome/AnnouncementText.png"
import styled from "@emotion/styled";
function Announcement(){
    return(
        <AnnouncementStyle>
            <TextImg src={AnnouncementText}/>
        </AnnouncementStyle>
    )
}

const TextImg = styled.img`
    width: 80%;
` 
export default Announcement