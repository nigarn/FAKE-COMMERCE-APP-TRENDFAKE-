import { ActionTypes } from "redux/constants/actionTypes";

export const getCategoryReducer = (state = [], { payload, type }) => {
  switch (type) {
    case ActionTypes.GET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

export const getProductsByCategoryReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS_BY_CATEGORY:
      return { ...state, products: payload };
    case ActionTypes.REMOVE_SELECTED_CATEGORY:
      return {};
    default:
      return state;
  }
};
