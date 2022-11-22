import React from 'react'
import { Searchsliders } from '../../Data'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Searchslider = () => {
  return (
      <div className='container lg:w-[10rem]'>
          <Swiper
           slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{ clickable: true }}
          className="mySwiper"
          modules={[Navigation, Pagination]}>
                {Searchsliders.map((items, index) => {
                    return (
                        <SwiperSlide>
                            <div key={index}>
                                <div>
                                    <div>
                                        <img src={items.image.type} alt="" />
                                        <p>{items.premier}</p>
                                    </div>
                                </div>

                                <div>
                                    <h1>{items.decrypt}</h1>
                                    <h1>{ items.heading}</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}  
          </Swiper>
    </div>
  )
}

export default Searchslider