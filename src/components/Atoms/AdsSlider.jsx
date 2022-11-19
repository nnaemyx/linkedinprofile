import React from "react";
import { adsslider } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Line from "../../images/Line 12.png";
import './slider.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AdsSlider = () => {
  return (
    <div className="lg:container mt-8 mb-20">
      <div className="bg-white h-[20.5rem] p-3">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{ clickable: true }}
          className="productSlider lg:min-h-[350px] min-h-[400px]"
          modules={[Navigation, Pagination]}
        >
          {adsslider.map((items, index) => {
            return (
              <SwiperSlide>
                <div key={index}>
                  <img src={Line} alt="" className="w-[99%] mb-4 hidden lg:flex" />
                  <div className="flex lg:flex-row flex-col items-center justify-between">
                    <div className="lg:w-[40rem] lg:ml-2">
                      <h1 className="lg:text-[30px] lg:w-[30rem] font-[800]">
                        {items.heading}
                      </h1>
                      <p className="lg:text-[18px] lg:w-[33.5rem] text-[#6B6868]">{items.paragraph}</p>
                      <div className="flex gap-2 text-[#6B6868] mt-4 lg:mt-0 mb-4 lg:mb-0 text-[12px]">
                        <p>{items.name}</p>
                        <p>{items.time}</p>
                      </div>
                    </div>

                    <div>
                      <img
                        src={items.imageleft.type}
                        alt=""
                        className="lg:h-[250px] lg:w-[500px] lg:mr-8"
                      />
                    </div>
                  </div>
                  <img src={Line} alt="" className="w-[99%] hidden lg:flex mt-6" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default AdsSlider;
