import React from "react";
import { starRating } from "../Images";
import { customerReview } from "../data/customerData";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CustomersComment.scss";
const CustomersComment = () => {
  return (
    <div className="ourCustomers">
      <h2 className="title">Our Customers Say</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={6}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          stopOnLastSlide: false,
          pauseOnMouseEnter: true,
        }}
        pagination={true}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {customerReview.map((elm) => {
          let randomStarCount = Math.round(Math.random() * 2 + 3);
          return (
            <SwiperSlide className="eachCustomer" key={elm.id}>
              <div className="profileSec">
                <img src={elm.img} alt="img" />
                <div className="profileInfo">
                  <h2>{elm.nickname}</h2>
                  <div className="starReview">
                    {[...Array(randomStarCount)].map((count, ind) => {
                      return <img src={starRating} alt="star" key={ind} />;
                    })}
                  </div>
                </div>
              </div>
              <p className="comment">{elm.comment}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CustomersComment;
