import React from "react";
import { reviews } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {AiFillStar} from 'react-icons/ai'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Reviews = () => {
  return (
    <div className="text-center">
      <div className="lg:w-[730px] lg:mx-8  py-8 lg:pl-[2rem] pl-[1rem] lg:h-[190px]">
        <h1 className="font-semibold text-[20px] mb-3">Reviews</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          modules={[Navigation]}
          className="mySwiper min-h-[110px]"
        >
          {reviews.map((items, index) => {
            return (
              <SwiperSlide>
                <div key={index} className='bg-white h-[240px] w-[200px] lg:w-auto lg:mx-0 mx-[3.5rem] text-center mb-8'>
                  <img src={items.image.type} alt="" className="lg:mx-[5rem] mx-[4rem]  pt-4" />
                  <div className="items-center">
                    <h1>{items.name}</h1>
                    <p>{items.paragraph}</p>
                    <p className="lg:px-[1rem] mb-2 text-center">{ items.paragraph1}</p>
                  </div>
                  <div className="flex lg:w-auto w-20 mx-[3.5rem] lg:mx-[5rem]">
                    <AiFillStar className="text-[#E8A41C]" />
                    <AiFillStar className="text-[#E8A41C]" />
                    <AiFillStar className="text-[#E8A41C]" />
                    <AiFillStar className="text-[#E8A41C]" />
                    <AiFillStar className="text-[#292D32]"/>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
