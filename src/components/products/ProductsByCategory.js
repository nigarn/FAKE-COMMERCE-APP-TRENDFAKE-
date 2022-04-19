import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProductsByCategoryAction,
  removeSelectedCategoryAction,
} from "redux/actions/categoryAction";
import { getProductsByCategory } from "services/categoriesApi";
import ProductCard from "./ProductCard";

const ProductsByCategory = () => {
  const { category } = useParams();
  const products = useSelector((state) => state.productsByCategory.products);
//  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (category && category !== "") {
      getProductsByCategory(category).then((res) => {
       // console.log(res.data);
        dispatch(getProductsByCategoryAction(res.data));
        //console.log(products);
      });
    }
    return () => dispatch(removeSelectedCategoryAction());
  }, [category]);
  return (
    <>
      <ProductCard products={products} />
    </>
  );
};

export default ProductsByCategory;
