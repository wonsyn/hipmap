import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

http.interceptors.request.use(
  (config) => {
    let loginToken: string | null = null;
    if (localStorage.getItem("token")) {
      loginToken = localStorage.getItem("token");
    }
    if (loginToken != null) {
      config.headers = {
        accessToken: `${JSON.parse(loginToken).accessToken}`,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;

    if (status === 403 || status === 401) {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const tokenObj = JSON.parse(token);
          const accessToken = tokenObj.accessToken;
          const refreshToken = tokenObj.refreshToken;

          const res = await axios.get(`${baseURL}/jwt/re-issue`, {
            headers: {
              refreshToken: refreshToken,
            },
          });

          const issuedTImeString = `&{new Date().getTime()}`;
          const issuedTime = parseInt(issuedTImeString);

          const newAccessToken = res.data.tokens.accessToken;
          const newRefreshToken = res.data.tokens.refreshToken;
          const saveToken = JSON.stringify({
            accessToken: newAccessToken,
            expireTime: issuedTime + res.data.tokens.expireMilliSec,
            refreshToken: newRefreshToken,
          });
          localStorage.setItem("token", saveToken);

          return await axios(originalRequest);
        }
      } catch (e: any) {
        localStorage.removeItem("token");
        alert("로그인이 풀렸습니다. 다시 로그인 해주시기 바랍니다.");
        window.location.href = "/login";
        new Error(e);
      }
    }

    return Promise.reject(error);
  }
);

export default http;
