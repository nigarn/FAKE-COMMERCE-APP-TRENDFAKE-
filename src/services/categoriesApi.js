import instance from "./api";


export const getAllCategories = ()=>{
    return instance.get('/products/categories')
}

export const getProductsByCategory=(category)=>{
    return instance.get(`/products/category/${category}`)
}