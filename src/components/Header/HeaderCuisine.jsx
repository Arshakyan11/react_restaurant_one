import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeaderCuisine.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { cuisines } from "../../data/data";

const HeaderCuisine = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="cuisinesBox">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          stopOnLastSlide: false,
          pauseOnMouseEnter: true,
        }}
        pagination={true}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {cuisines.map((elm, index) => {
          return (
            <SwiperSlide className="eachCuisine">
              <div className="leftSide">
                <p className="restaurants">Restaurant </p>
                <p className="cusisineType">
                  {elm.cuisine} <br /> Cuisine
                </p>
                <p className="aboutCousine">{elm.info}</p>
              </div>
              <div className="rightSide">
                <img src={elm.img} alt="restaurant Img" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeaderCuisine;
