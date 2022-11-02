import axios from "axios";

export const uploadImage = (formdata: FormData) => {
  return new Promise((resolve, reject) => {
    //추후에 액세스 토큰 집어 넣을것.
    const loginToken = "";
    // not logined
    if (!loginToken) reject("login needed");

    //추후에 적당하게 url 변경하기
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/image`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${loginToken}`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
