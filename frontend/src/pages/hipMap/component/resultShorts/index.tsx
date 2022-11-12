import { ShortsWrappingDiv, ShortsDiv, ShortsImage1, ShortsImage2, ShortsImage3, ShortsImage4, ShortsImage5, ShortsImage6 } from "../../styles/result"
import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import Modal from "../../../../components/modal/Modal";
import SingleShorts from "../../../singleShorts";


function ResultShorts(shorts: any){
    console.log("너희는 누구냐?", shorts.shorts)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectId, setSelectId] = useState<number | undefined>();
    const isMobile = useMediaQuery("(max-width:1023px)");
    useEffect(() => {
        if (!isModalOpen) {
          setSelectId(undefined);
        }
      }, [isModalOpen, selectId]);
    return(
        <ShortsWrappingDiv>
            {isModalOpen && selectId !== undefined && (
            <Modal
            width={isMobile ? "80%" : "1024px"}
            height="80%"
            modalHandler={() => {
                setIsModalOpen((prev) => {
                return !prev;
                });
                setSelectId(undefined);
            }}
            >
            <SingleShorts shortsId={selectId} />
            </Modal>
        )}
            {shorts.shorts.map((short: any, i: number) => {
                console.log(i)
                if(i % 6 === 0){
                    return(
                        <ShortsDiv>
                            <ShortsImage1 src={short.thumbnailSrc} alt="썸네일1" onClick={() => {
                                setIsModalOpen((prev) => {
                                    return !prev;
                                  });
                                setSelectId(short.shortsId)}}/>
                        </ShortsDiv>
                    )
                }
                else if(i % 6 === 1){
                    return(
                        <ShortsDiv>
                            <ShortsImage2 src={short.thumbnailSrc} alt="썸네일2" onClick={() => {
                                setIsModalOpen((prev) => {
                                    return !prev;
                                  });
                                setSelectId(short.shortsId)}}/>
                        </ShortsDiv>
                    )
                }
                else if(i % 6 === 2){
                    return(
                        <ShortsDiv>
                            <ShortsImage3 src={short.thumbnailSrc} alt="썸네일3" onClick={() => {
                                setIsModalOpen((prev) => {
                                    return !prev;
                                  });
                                setSelectId(short.shortsId)}}/>
                        </ShortsDiv>
                    )
                }
                else if(i % 6 === 3){
                    return(
                        <ShortsDiv>
                            <ShortsImage4 src={short.thumbnailSrc} alt="썸네일4" onClick={() => {
                                setIsModalOpen((prev) => {
                                    return !prev;
                                  });
                                setSelectId(short.shortsId)}} />
                        </ShortsDiv>
                    )
                }
                else if(i % 6 === 4){
                    return(
                        <ShortsDiv>
                            <ShortsImage5 src={short.thumbnailSrc} alt="썸네일5" onClick={() => {
                                setIsModalOpen((prev) => {
                                    return !prev;
                                  });
                                setSelectId(short.shortsId)}} />
                        </ShortsDiv>
                    )
                }
                else if(i % 6 === 5){
                    return(
                        <ShortsDiv>
                            <ShortsImage6 src={short.thumbnailSrc} alt="썸네일6" onClick={() => {
                                setIsModalOpen((prev) => {
                                    return !prev;
                                  });
                                setSelectId(short.shortsId)}} />
                        </ShortsDiv>

                    )
                }
            })}
        </ShortsWrappingDiv>
    )
}

export default ResultShorts