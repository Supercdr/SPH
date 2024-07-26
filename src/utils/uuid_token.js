import { v4 as uuidv4 } from "uuid";

export const getUUID = () => {
  // 先从本地存储中查看是否有储存
  let uuid_token = localStorage.getItem("UUIDTOKEN");
  // 若没有储存，则新生成一个uuid_token
  if (!uuid_token) {
    uuid_token = uuidv4();
    // 本地存储token
    localStorage.setItem("UUIDTOKEN",uuid_token);
  }
  return uuid_token
};
