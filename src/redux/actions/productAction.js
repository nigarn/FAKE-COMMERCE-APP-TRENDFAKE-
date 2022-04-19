import { ActionTypes } from "redux/constants/actionTypes";

export const GetProductAction = (products) => {
  return {
    type: ActionTypes.GET_PRODUCTS,
    payload: products,
  };
};

export const getSingleProductAction = (product) => {
  return {
    type: ActionTypes.SINGLE_PRODUCT,
    payload: product,
  };
};
export const removeSingleProductAction = () => {
  return {
    type: ActionTypes.REMOVE_CHOOSING,
  };
};
