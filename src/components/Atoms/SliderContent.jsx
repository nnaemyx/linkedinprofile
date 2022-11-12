import React from "react";
import { reviews } from "./sliderImage";
import { AiFillStar } from "react-icons/ai";

function SliderContent({ activeIndex }) {
  return (
    <section>
      {reviews.map((items, index) => {
        return (
          <div
            className={index === activeIndex ? "slides active" : "inactive"}
            key={index}
          >
            <div className="lg:w-[250px] w-[190px] mx-10 lg:mx-0 rounded-md text-center py-4 justify-center px-2 lg:h-[210px]  bg-white">
              <img
                src={items.image.type}
                alt=""
                className="text-center w-[58px] mx-[5.5rem]"
              />
              <div className="text-center justify-center items-center">
                <h1 className="font-semibold">{items.name}</h1>
                <p className="text-[14px]">{items.paragraph}</p>
                <p className="text-[14px] lg:px-8">{items.paragraph1}</p>
              </div>
              <div className="flex text-center  items-center justify-center">
                <AiFillStar className="text-[#E8A41C]" />
                <AiFillStar className="text-[#E8A41C]" />
                <AiFillStar className="text-[#E8A41C]" />
                <AiFillStar className="text-[#E8A41C]" />
                <AiFillStar className="text-[#292D32]" />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default SliderContent;
