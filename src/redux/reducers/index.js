import { combineReducers } from "redux";
import {
  getCategoryReducer,
  getProductsByCategoryReducer,
} from "./categoryReducer";
import { productReducer, singleProductReducer } from "./productReducer";
import { getUserReducer } from "./userReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  singleProduct: singleProductReducer,
  allUsers: getUserReducer,
  allCategories: getCategoryReducer,
  productsByCategory: getProductsByCategoryReducer,
});
export default reducers;
