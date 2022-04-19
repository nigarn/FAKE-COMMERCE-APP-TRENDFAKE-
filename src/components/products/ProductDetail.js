import React, { useEffect } from "react";

import { getProductDetail } from "services/productsApi";
import {
  getSingleProductAction,
  removeSingleProductAction,
} from "redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import "styles/ProductDetail.scss";
import "styles/layout.scss";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const product = useSelector((state) => state.singleProduct.product);
  // console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id && id !== "") {
      getProductDetail(id).then((res) => {
        console.log(res);
        dispatch(getSingleProductAction(res.data));
      });
    }
    return () => dispatch(removeSingleProductAction());
  }, [id]);

  return (
    <>
      {product ? (
        <div className=" shadow display detail-container">
          <div className="product-img">
            <img src={product.image} alt={product.title}/>
          </div>
          <div style={{ width: '50%'}}>
            <div className="item-desc">
              <p>
                <b>{product.title}</b>
              </p>
              {product.rating ? (
                <div className="display rating">
                  <Rating value={product.rating.rate} readOnly />
                  <p>({product.rating.count})</p>
                </div>
              ) : (
                ""
              )}
              <p className="product-desc">{product.description}</p>
              <p>
                <b>{product.price} $</b>
              </p>
            </div>
            <div className="display add-card">
              <FiShoppingCart />
              <p>Add to card</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductDetail;
