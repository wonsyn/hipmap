import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../utils/http-commons";

//유저 정보 수정하기
export const useUserInfoModify = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({
      label,
      followPrivate,
      nickname,
    }: {
      label: string;
      followPrivate: boolean;
      nickname: string;
    }) => {
      const response = await http.put(`/user/edit`, {
        followPrivate: followPrivate,
        label,
        nickname,
      });
      console.log(response);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userInfomation"]);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );
};

export const useFollowAdd = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id: number) => {
      const response = await http.post(`/follow/` + id);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["following"]);
        queryClient.invalidateQueries(["follower"]);
      },
    }
  );
};

export const useFollowDelete = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id: number) => {
      const response = await http.delete(`/follow/` + id);

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["following"]);
        queryClient.invalidateQueries(["follower"]);
      },
    }
  );
};
