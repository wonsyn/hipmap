/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  MyModifyProfileWrapperDiv,
  MyProfileModifyLabelingButton,
  MyProFileModifyLabelingDeleteButton,
  MyProfileModifyLabelingDiv,
  MyProFileModifyLabelingFollowOpenButton,
  MyProfileModifyLabelingFollowOpenWrapper,
  MyProfileModifyLabelingInput,
  MyProfileModifyLabelingInputWrapper,
  MyProFileModifyLabelingModifyButton,
  MyProFileModifyLabelingModifyWrapper,
  MyProfileModifyLabelingNameDiv,
  MyProfileModifyLabelingWrapper,
  MyProfileModifyWrapper,
} from "../styles/MyProfileModify";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hoc/useStoreHooks";
import { useFetchUserInfo } from "../../../hoc/useFetch";
import { useNavigate } from "react-router-dom";
import {
  useUploadProfileImg,
  useUserDelete,
  useUserInfoModify,
} from "../../../hoc/useMutation";
import {
  logout,
  proFileModify,
  userModify,
} from "../../../store/login/loginStore";
import { MyFollowProfileWrapperDiv } from "../styles/MyFollowWrapperStyle";
import http from "../../../utils/http-commons";
import ColorAlerts from "../../shorts/component/colorAlerts";
import theme from "../../../styles/theme";
import { QueryClient, useMutation } from "@tanstack/react-query";
import Modal from "../../../components/modal/Modal";

const MyProfileModify = () => {
  const queryClient = new QueryClient();
  const userInfo = useAppSelector((store) => store.userReducer.user);
  const [profileImg, setProfileImg] = useState<File>();
  const [userDeleteComplete, setUserDeleteComplete] = useState<boolean>();

  const profileRef = useRef<HTMLInputElement>(null);
  const { data, isLoading, isError, refetch } = useFetchUserInfo(
    userInfo.user_id
  );
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [followOpen, setFollowOpen] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");
  const navigator = useNavigate();
  const { mutate, isLoading: mutateLoading } = useUserInfoModify();
  const { mutate: myProfileUploadMutate } = useUploadProfileImg();
  const dispatch = useAppDispatch();
  const [modifyOpen, setModifyOpen] = useState<boolean>(false);
  console.log(data);
  useEffect(() => {
    if (data && data.userInfo.proImgSrc) {
      if (data.userInfo.proImgSrc) {
        console.log(data.userInfo.proImgSrc);
        dispatch(proFileModify({ profileImg: data.userInfo.proImgSrc }));
      } else if (data.userInfo.proImgSrc === null) {
        console.log(data.userInfo.proImgSrc);
        dispatch(proFileModify({ profileImg: undefined }));
      }
    }
  }, [data, data?.userInfo.proImgSrc, dispatch]);
  useEffect(() => {
    if (
      !isLoading &&
      data &&
      data.userInfo.followPrivate !== undefined &&
      data.userInfo.nickname
    ) {
      setFollowOpen(data.userInfo.followPrivate);
      setNickname(data.userInfo.nickname);
    }
  }, [isLoading, data]);

  const profileImgModify = async (e: any) => {
    myProfileUploadMutate({ file: e.target.files[0] });
  };
  const profileImgModifyButton = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (profileRef !== null && profileRef.current) {
      profileRef.current.click();
    }
  };
  const { mutate: profileImgMutate } = useMutation(
    async (id: number) => {
      const response = await http.delete(`/user/profile/img`);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userInfomation"]);
        refetch();
      },
    }
  );
  const { mutate: userDelete } = useUserDelete();
  if (isLoading) {
    return <div>로딩중?</div>;
  } else if (!isLoading && data) {
    return (
      <MyProfileModifyWrapper>
        {openModal && (
          <Modal
            backgroundcolor="#240046"
            width="300px"
            height="300px"
            modalHandler={() => {
              setOpenModal((prev) => {
                return !prev;
              });
            }}
          >
            <div
              css={css`
                color: white;
              `}
            >
              {userDeleteComplete ? (
                <div>
                  <h5>탈퇴처리가 완료 되었습니다.</h5>
                </div>
              ) : (
                <div>
                  <h5>정말로 탈퇴 하시겠습니까?</h5>
                  <div>
                    <button
                      css={css`
                        width: 70px;
                        height: 30px;
                        position: absolute;
                        /* left: 10px; */
                        right: 90px;
                        bottom: 10px;
                        border: none;
                        border-radius: 8px;
                        background: ${theme.colors.subColorGradient2};
                        font-weight: bolder;
                      `}
                      onClick={() => {
                        userDelete(
                          { num: 1 },
                          {
                            onSuccess: () => {
                              setUserDeleteComplete(true);
                            },
                          }
                        );
                      }}
                    >
                      예
                    </button>
                    <button
                      css={css`
                        width: 70px;
                        height: 30px;
                        position: absolute;
                        right: 10px;
                        bottom: 10px;
                        border: none;
                        border-radius: 8px;
                        background: ${theme.colors.subColorGradient2};
                        font-weight: bolder;
                      `}
                      onClick={() => {
                        setOpenModal(false);
                      }}
                    >
                      아니오
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Modal>
        )}
        {modifyOpen && (
          <ColorAlerts
            open={modifyOpen}
            openHandler={() => {
              setModifyOpen((prev) => {
                return !prev;
              });
            }}
            content={"회원 정보 수정 완료"}
          />
        )}
        {/* 레이블링 */}
        <MyProfileModifyLabelingWrapper>
          <h2>당신의 레이블링</h2>

          <MyProfileModifyLabelingDiv>
            <MyProfileModifyLabelingButton
              onClick={() => {
                navigator("/labeling/welcome", {
                  state: {
                    followPrivate: data.userInfo.followPrivate,
                  },
                });
              }}
            >
              재검사 하러가기
            </MyProfileModifyLabelingButton>
            <MyProfileModifyLabelingNameDiv>
              {data.userInfo.labelName}
            </MyProfileModifyLabelingNameDiv>
          </MyProfileModifyLabelingDiv>
        </MyProfileModifyLabelingWrapper>
        {/* 정보 바꾸기 */}
        <MyProfileModifyLabelingInputWrapper>
          <div>
            {data.userInfo.proImgSrc ? (
              <div
                css={css`
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                `}
              >
                <div onClick={profileImgModifyButton}>
                  <MyModifyProfileWrapperDiv url={data.userInfo.proImgSrc} />
                </div>
                <button
                  css={css`
                    width: 100px;
                    border-radius: 8px;
                    height: 30px;
                    margin-top: 1vh;
                    border: none;
                    background: ${theme.colors.subColorGradient3};
                    color: white;
                  `}
                  onClick={() => {
                    profileImgMutate(1, {
                      onSuccess: () => {
                        dispatch(proFileModify({ profileImg: undefined }));
                      },
                    });
                  }}
                >
                  삭제하기
                </button>
              </div>
            ) : (
              <div onClick={profileImgModifyButton}>
                <AccountCircleIcon sx={{ fontSize: 60 }} />
              </div>
            )}
          </div>

          <input
            type="File"
            ref={profileRef}
            accept=".png, .jpg"
            name="imgFile"
            onChange={profileImgModify}
            css={css`
              display: none;
            `}
          />

          <MyProfileModifyLabelingInput
            value={data.userInfo.username + " - 아이디는 변경 불가"}
            disabled
          />
          <MyProfileModifyLabelingInput
            value={nickname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNickname((prev) => {
                return e.target.value;
              });
            }}
          />
          <MyProfileModifyLabelingInput
            value={data.userInfo.email + " - 이메일은 변경 불가"}
            disabled
          />
        </MyProfileModifyLabelingInputWrapper>
        {/* 팔로워 팔로잉 공개 여부 */}
        <MyProfileModifyLabelingFollowOpenWrapper>
          <div> 팔로워, 팔로잉 공개여부</div>
          <MyProFileModifyLabelingFollowOpenButton
            onClick={() => {
              setFollowOpen((prev) => {
                return !prev;
              });
            }}
          >
            {followOpen ? "비공개" : "공개"}
          </MyProFileModifyLabelingFollowOpenButton>
        </MyProfileModifyLabelingFollowOpenWrapper>
        {/* 수정 버튼 */}
        <MyProFileModifyLabelingModifyWrapper>
          <MyProFileModifyLabelingDeleteButton
            onClick={() => {
              setOpenModal(true);
            }}
          >
            탈퇴
          </MyProFileModifyLabelingDeleteButton>
          <MyProFileModifyLabelingModifyButton
            onClick={() => {
              mutate(
                {
                  label: userInfo.labeling,
                  followPrivate: followOpen,
                  nickname,
                },
                {
                  onSuccess: () => {
                    dispatch(
                      userModify({
                        nickname,
                        labeling: userInfo.labeling,
                        followPrivate: followOpen,
                      })
                    );
                    setModifyOpen(true);
                  },
                }
              );
            }}
          >
            수정
          </MyProFileModifyLabelingModifyButton>
        </MyProFileModifyLabelingModifyWrapper>
      </MyProfileModifyWrapper>
    );
  } else {
    console.log(isError);
    return (
      <div>
        에러가 발생하였습니다.
        <button
          onClick={() => {
            navigator("/");
          }}
        >
          홈으로 이동
        </button>
      </div>
    );
  }
};

export default MyProfileModify;
