import instance from "./api";

export const getAllProducts = () => {
  return instance.get("/products");
};
export const getProductDetail = (id) => {
  return instance.get(`/products/${id}`);
};
