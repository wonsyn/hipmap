import axios from "axios";

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
    return Promise.reject(error);
  }
);

export default http;
