import { ActionTypes } from "redux/constants/actionTypes";

export const getCategoriesAction = (categories) => {
  return {
    type: ActionTypes.GET_CATEGORIES,
    payload: categories,
  };
};

export const getProductsByCategoryAction = (products) => {
  return {
    type: ActionTypes.GET_PRODUCTS_BY_CATEGORY,
    payload: products,
  };
};

export const removeSelectedCategoryAction =()=>{
  return{
    type: ActionTypes.REMOVE_SELECTED_CATEGORY,
  }
}
