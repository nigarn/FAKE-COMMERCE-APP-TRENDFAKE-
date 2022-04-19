import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductAction } from "redux/actions/productAction";
import { getAllProducts } from "services/productsApi";
import "styles/productCard.scss";
import "styles/layout.scss";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  
  return (
  <ProductCard products={products}/>
  );
};

export default ProductPage;
