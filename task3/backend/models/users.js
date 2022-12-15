import { users } from "../users.js";

export const getAllItems = () => {
  return users;
};

export const addItem = (objBody) => {
  users.unshift(objBody);
  return [];
};


