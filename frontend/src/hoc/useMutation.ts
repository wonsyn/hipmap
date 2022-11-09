import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../utils/http-commons";
import axios from "axios";
import { useAppSelector } from "./useStoreHooks";

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
        queryClient.invalidateQueries(["userInfomation"]);
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
        queryClient.invalidateQueries(["userInfomation"]);
      },
    }
  );
};

export const useUploadShorts = () => {
  const queryClient = useQueryClient();
  const access_token = useAppSelector((store) => store.userReducer.token);
  return useMutation(
    async ({
      shorts,
      file_type,
    }: {
      shorts: {
        file: File;
        si: string;
        gu: string | null;
        gun: string | null;
        lat: number;
        lng: number;
      };
      file_type: string;
    }) => {
      let temp = new FormData();
      temp.append("file", shorts.file);
      temp.append(
        "CreateShortsRequest",
        new Blob(
          [
            JSON.stringify({
              locationSi: shorts.si,
              locationGu: shorts.gu,
              locationDong: shorts.gun,
              latitude: shorts.lat,
              longitude: shorts.lng,
              fileType: file_type,
            }),
          ],
          { type: "application/json" }
        )
      );
      console.log(temp);

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/shorts/upload`,
        temp,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            accessToken: `${access_token.access_token}`,
          },
        }
      );

      console.log(response);

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    }
  );
};

export const useFirstLikeVote = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ id, vote }: { id: number; vote: boolean }) => {
      const response = await http.post(`/like/isLike`, {
        shortsId: id,
        vote,
      });

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["shortsInfinite"]);
      },
    }
  );
};

export const useLikeVote = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ id, vote }: { id: number; vote: boolean }) => {
      const response = await http.put(`/like/isLike`, {
        shortsId: id,
        vote,
      });

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["shortsInfinite"]);
      },
    }
  );
};

export const useLikeDelete = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ id }: { id: number }) => {
      const response = await http.delete(`/like?shortsId=` + id);

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["shortsInfinite"]);
      },
    }
  );
};

export const useCommentWrite = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({
      content,
      group,
      sequence,
      id,
    }: {
      id: number;
      content: string;
      group: number;
      sequence: number;
    }) => {
      const response = await http.post(`/hip/comment/${id}/write`, {
        content,
        group,
        sequence,
      });

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["shortsComments"]);
        queryClient.invalidateQueries(["shortsInfinite"]);
      },
    }
  );
};

export const useCommentDelete = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ commentId }: { commentId: number }) => {
      const response = await http.delete(
        `/hip/comment/{shortsId}/{commentId}?commentId=` + commentId
      );

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["shortsComments"]);
        queryClient.invalidateQueries(["shortsInfinite"]);
      },
    }
  );
};

export const useBookMarkAdd = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ shortsId }: { shortsId: number }) => {
      const response = await http.post(`/hip/bookmark?shortsId=` + shortsId);

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["bookmarkList"]);
      },
    }
  );
};
