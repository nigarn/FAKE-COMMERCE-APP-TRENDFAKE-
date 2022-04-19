import { ActionTypes } from "redux/constants/actionTypes";
const initState = {
  products: [],
};
// const initSingleProductState = {
//   product: [],
// };
export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const singleProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SINGLE_PRODUCT:
      return { ...state, product: payload };
    case ActionTypes.REMOVE_CHOOSING:
      return {};
    default:
      return state;
  }
};
