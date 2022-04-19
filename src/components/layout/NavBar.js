import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getCategoriesAction } from "redux/actions/categoryAction";
import { getAllCategories } from "services/categoriesApi";
import "styles/navbar.scss";
const NavBar = () => {
  const categories = useSelector((state) => state.allCategories.categories);
  //console.log(categories);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllCategories().then((res) => {
      // console.log(res.data);
      dispatch(getCategoriesAction(res.data));
      // console.log(categories);
    });
  }, []);

  return (
    <nav className="navbar">
      <NavLink
        className="navbar-itm"
        style={{ textDecoration: "none", color: "black" }}
        to="products"
      >
        All products
      </NavLink>
      {categories &&
        categories.map((category, index) => {
          return (
            <Link
              className="navbar-itm"
              style={{ textDecoration: "none", color: "black" }}
              key={index}
              to={`products/category/${category}`}
            >
              {category}
            </Link>
          );
        })}
    </nav>
  );
};

export default NavBar;
