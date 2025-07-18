import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import {Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules"
import Course_Card from "./Course_Card"




function Course_Slider({ Courses }) {
 
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          pagination={true}
          modules={[FreeMode, Autoplay, Pagination, Navigation]}
          autoplay={{
            delay:2000,
            disableOnInteraction:false
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={true}
          className="mySwiper max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
      {/* <h1>courseSlider</h1> */}
    </>
  )
}

export default Course_Slider
