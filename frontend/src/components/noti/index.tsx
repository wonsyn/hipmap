/** @jsxImportSource @emotion/react */
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { css } from "@emotion/react";
import http from "../../utils/http-commons";
import theme from "../../styles/theme";

const Noti = ({
  openHandler,
  data,
  isLoading,
  refetch,
}: {
  data: any;
  isLoading: boolean;
  refetch: any;
  openHandler: () => void;
}) => {
  const queryClient = new QueryClient();

  const { mutate } = useMutation(async ({ id }: { id: any }) => {
    const response = await http.patch(`/notifications/` + id);
    return response.data;
  });

  if (isLoading || !data) {
    return <div>로딩중...</div>;
  }
  return (
    <div
      css={css`
        width: 250px;
        min-height: 300px;
        height: 70vh;
        max-height: 700px;
        overflow-y: scroll;
        right: 3%;
        position: absolute;
        top: 50%;
        font-size: 0.8rem;
        background: ${theme.colors.subColorGradient2};
        border-radius: 4px;
        padding: 3px;
        z-index: 9999;
      `}
    >
      <h2
        css={css`
          padding-bottom: 3%;
          border-bottom: 2px solid black;
        `}
      >
        알림 목록
      </h2>
      <div
        css={css`
          margin-top: 2%;
        `}
      >
        {data.notificationResponses.map((e: any, i: number) => (
          <div
            key={i}
            css={css`
              margin-top: 2%;
            `}
          >
            {!e.read && (
              <div
                onClick={() => {
                  mutate(
                    { id: e.id },
                    {
                      onSuccess: () => {
                        queryClient.invalidateQueries(["noti"]);
                        refetch();
                      },
                    }
                  );
                }}
              >
                {e.content}
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        css={css`
          position: absolute;
          left: 3%;
          bottom: 2%;
        `}
      >
        읽지 않은 알림 {data.unreadCount}
      </div>
      <div
        css={css`
          position: absolute;
          right: 3%;
          bottom: 2%;
        `}
        onClick={openHandler}
      >
        닫기
      </div>
    </div>
  );
};

export default Noti;
