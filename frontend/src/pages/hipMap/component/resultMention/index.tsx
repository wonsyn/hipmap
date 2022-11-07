import { TextDiv, HipPlaceDiv, MentionWrappingDIv, ScrollMentionDiv } from "../../styles/result"

function ResultMention(){
    return(
        <MentionWrappingDIv>
            <TextDiv>
                선택한 지역에 대한
            </TextDiv>
            <HipPlaceDiv>
                Hip Place
            </HipPlaceDiv>
            <ScrollMentionDiv>
                스크롤하여 살펴보세요!
            </ScrollMentionDiv>
        </MentionWrappingDIv>
    )
}

export default ResultMention