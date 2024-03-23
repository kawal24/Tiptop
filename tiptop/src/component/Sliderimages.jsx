import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Tiptop from "./tiptop";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src="Images/one.jpg" alt="" className="w-[50%] h-[50vh]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Images/two.jpg" alt="" className="w-[100%] h-[50vh]" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="Images/three.jpg" alt="" className="w-[50%] h-[50vh]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Images/four.jpg" alt="" className="w-[50%] h-[50vh]" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="Images/five.jpg" alt="" className="w-[50%] h-[50vh]" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="Images/six.jpg" alt="" className="w-[50%] h-[50vh]" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="Images/seveen.jpg" alt="" className="w-[50%] h-[50vh]" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="Images/.jpg" alt="" className="w-[50%] h-[50vh]" />
        </SwiperSlide>
      </Swiper>
      {/* <Tiptop slider={Slider} /> */}
    </>
  );
};
export default Slider;
