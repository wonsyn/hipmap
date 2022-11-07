import { useQuery } from "@tanstack/react-query";
import http from "../utils/http-commons";

interface userinformationProps {
  isFollow: boolean;
  userInfo: {
    email: string;
    followPrivate: boolean;
    followerCount: number;
    followingCount: number;
    labelName: string;
    nickname: string;
    proImgSrc: string | null;
    role: string;
    shortsCount: number;
    userId: number;
    username: string;
  };
}

// 유저 정보 가져오기
export const useFetchUserInfo = (id: number) => {
  return useQuery<userinformationProps>(
    ["userInfomation"],
    async () => {
      const response = await http.get(`/user/${id}`);
      return response.data;
    },
    { refetchOnWindowFocus: false }
  );
};

export const useFetchUserFollow = ({
  id,
  fetchType,
}: {
  id: number;
  fetchType: string;
}) => {
  return useQuery<{
    message: string;
    username: string;
    follow: {
      userId: number;
      followUserName: string;
      proImgSrc: string;
    }[];
  }>(
    [fetchType],
    async () => {
      console.log(id, fetchType);
      if (fetchType === "follower") {
        const response = await http.get(`/follow/followerList?userId=` + id);

        console.log(response.data);
        return response.data;
      } else {
        const response = await http.get(`/follow/followingList?userId=` + id);
        return response.data;
      }
    },
    { refetchOnWindowFocus: false }
  );
};

export const useFetchFollowSearch = (word: string) => {
  return useQuery<{ follow: string[] }>(["followSearch"], async () => {
    const response = await http.get(`/follow?keyword=` + word);
    console.log(response.data);
    return response.data;
  });
};
