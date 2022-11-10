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

    if (status === 403 || 401) {
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
          const newAccessToken = res.data.tokens.accessToken;
          const newRefreshToken = res.data.tokens.refreshToken;
          const saveToken = JSON.stringify({
            accessToken: res.data.tokens.accessToken,
            refreshToken: res.data.tokens.refreshToken,
          });
          localStorage.setItem("token", saveToken);

          return await axios(originalRequest);
        }
      } catch (e: any) {
        console.log(e);
        // localStorage.removeItem("token");
        // window.location.href = "/";
        new Error(e);
      }
    }

    return Promise.reject(error);
  }
);

export default http;
