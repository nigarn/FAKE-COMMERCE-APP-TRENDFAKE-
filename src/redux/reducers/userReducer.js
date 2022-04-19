import { ActionTypes } from "redux/constants/actionTypes";
const userState={
  users:[]
}
export const getUserReducer=(state=userState,{payload,type})=>{
    switch (type) {
        case ActionTypes.GET_USERS:
          return { ...state, users: payload };
        default:
          return state;
      }
}