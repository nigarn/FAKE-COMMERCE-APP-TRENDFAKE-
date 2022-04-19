import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductAction } from "redux/actions/productAction";
import { getAllProducts } from "services/productsApi";
import { mainPageData } from "data";
import "styles/mainPage.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { sliderItems } from "data";
const MainPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const productList = () => {
    return getAllProducts()
      .then((res) => {
        dispatch(GetProductAction(res.data));
        console.log(products);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    productList();
  }, []);
  return (
    <div className="main-container">
      <div>
        {" "}
        {mainPageData.map((elem, index) => {
          return (
            <div key={index}>
              <Link key={index} to={`products/category/${elem.category}`}>
                <div className="op-box">
                  <img src={elem.img} alt={elem.title} />
                  <div className="subject">
                    <p>{elem.subject}</p>

                    <p className="start">Start Shopping </p>
                  </div>{" "}
                </div>
              </Link>
              <Link to={`:id`}></Link>
            </div>
          );
        })}
      </div>

      <div style={{ width: "350px" }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2100,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={`${item.id}`}>
                <img
                  style={{ width: "100%" }}
                  src={item.img}
                  alt={item.title}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={`${item.id}`}>
                <img
                  style={{ width: "100%" }}
                  src={item.img}
                  alt={item.title}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={`${item.id}`}>
                <img
                  style={{ width: "100%" }}
                  src={item.img}
                  alt={item.title}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainPage;
