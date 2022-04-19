import ProductPage from "components/products/ProductPage";
import { Route, Routes } from "react-router-dom";
import "App.css";
import ProductDetail from "components/products/ProductDetail";
import Header from "components/layout/Header";
import ProductsByCategory from "components/products/ProductsByCategory";
import MainPage from "components/pages/MainPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/" element={<MainPage />} />

        <>
          <Route path=":id" element={<ProductDetail />} />
          <Route
            path="products/category/:category/:id"
            element={<ProductDetail />}
          />
          <Route path="products/:id" element={<ProductDetail />} />
        </>

        <Route
          path="products/category/:category"
          element={<ProductsByCategory />}
        />
      </Routes>
    </>
  );
}

export default App;
