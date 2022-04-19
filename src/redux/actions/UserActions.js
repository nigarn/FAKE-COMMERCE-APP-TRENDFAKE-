import { ActionTypes } from "redux/constants/actionTypes";

export const getUsersAction = (users) => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users,
  };
};
