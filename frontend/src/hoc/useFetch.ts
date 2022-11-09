import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import http from "../utils/http-commons";
import { useCommentSort } from "./useCommetSort";

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

interface shortsList {
  shortsList: {
    commentsCount: number;
    createTime: string;
    fileSrc: string;
    fileType: string;
    hateCount: number;
    isLike: string;
    likeCount: number;
    locationDong: string | null;
    locationGu: string | null;
    locationSi: string | null;
    shortsId: number;
    thumbnailSrc: String | null;
  }[];
  totalPage: number;
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

export const useFetchShortsInfinite = () => {
  return useInfiniteQuery<{
    result: shortsList;
    nextPage: number;
    isLast: boolean;
  }>(
    ["shortsInfinite"],
    async ({ pageParam = 0 }) => {
      const response = await http.get(`/shorts?page=` + pageParam);
      const result = response.data;
      return {
        result: result,
        nextPage: pageParam + 1,
        isLast: pageParam + 1 >= result.totalPage ? true : false,
      };
    },
    {
      getNextPageParam: (LastPage, pages) => {
        if (!LastPage.isLast) return LastPage.nextPage;
        return undefined;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    }
  );
};

interface comment {
  userNickname: string;
  commentId: string;
  content: string;
  group: number;
  sequence: number;
  createTime: string;
}

export const useFetchShortsComments = (id: number) => {
  return useQuery<
    {
      userNickname: string;
      commentId: string;
      content: string;
      group: number;
      sequence: number;
      createTime: string;
      userId: number;
    }[]
  >(
    ["shortsComments"],
    async () => {
      const response = await http.get(`/hip/comment/` + id);
      console.log(response.data);
      const result = response.data.comments.sort(function (
        a: comment,
        b: comment
      ) {
        if (a.group > b.group) {
          return 1;
        }
        if (a.group === b.group) {
          if (a.sequence > b.sequence) {
            return 1;
          }
          if (a.sequence < b.sequence) {
            return -1;
          }
        }
        if (a.group < b.group) {
          return -1;
        }
        return 0;
      });
      return result;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    }
  );
};

export const useFetchSingleShorts = (id: number) => {
  return useQuery<{
    commentsCount: number;
    createTime: string;
    fileSrc: string;
    fileType: string;
    hateCount: number;
    isLike: string;
    likeCount: number;
    locationDong: string | null;
    locationGu: string | null;
    locationSi: string | null;
    shortsId: number;
    thumbnailSrc: String | null;
  }>(
    ["singleShorts"],
    async () => {
      const response = await http.get(`/shorts/` + id);
      return response.data;
    },
    { refetchOnWindowFocus: false }
  );
};

export const useFetchMyShorts = (username: string) => {
  return useQuery<{ thumbnailSrc: string; shortsId: number }[]>(
    ["myPageShorts"],
    async () => {
      const response = await http.get(`/shorts/getusershorts/` + username);
      return response.data;
    },
    { refetchOnWindowFocus: false }
  );
};

export const useFetchMainBest = () => {
  return useQuery<{
    shortsList: {
      shortsId: number;
      likeCnt: number;
      thumbnailSrc: string;
    }[];
  }>(
    ["mainBest"],
    async () => {
      const response = await http.get(`/shorts/mainBest`);
      return response.data;
    },
    { refetchOnWindowFocus: false }
  );
};

export const useFetchPostCount = ({ username }: { username: string }) => {
  return useQuery<{ count: number }>(
    ["userPostCount"],
    async () => {
      const response = await http.get(
        "/shorts/user/count?username=" + username
      );
      return response.data;
    },
    { refetchOnWindowFocus: false }
  );
};
