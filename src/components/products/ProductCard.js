import { Backdrop, Rating } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "styles/productCard.scss";
import "styles/layout.scss";


const ProductCard = ({products}) => {
  
  return (
    <div className="container">
      {products ? (
        products.map((product, index) => {
          return (
            <Link
              key={index}
              to={`${product.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="shadow item-card">
                <div className="item-img">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="item-description">
                  <p className="price">
                    {product.title.lenght <= 65
                      ? product.title
                      : product.title.slice(0, 65)}
                  </p>
                  <div className="prc-rat">
                    {product.rating ? (
                      <Rating
                        name="read-only"
                        value={product.rating.rate}
                        readOnly
                      />
                    ) : (
                      ""
                    )}
                    <p>{product.price} $</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <p>data is not loading</p>
      )}
      <Outlet />
    </div>
  );
};

export default ProductCard;
