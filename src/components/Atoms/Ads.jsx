import React from "react";
import { people } from "../../Data";

const Ads = () => {
  return (
    <div className="lg:px-0">
      <div className="bg-primary rounded-md mx-6 lg:mx-0 lg:w-[335px] w-[291px] h-[233px] lg:h-[268px]">
        <h1 className="text-center py-24 text-[32px] font-bold text-white items-center ">
          ADS
        </h1>
      </div>
      <div className="bg-white mt-4 px-6 py-8 lg:rounded-md lg:w-[335px]  h-[503px] lg:h-[520px]">
        <h1 className="text-[18px] font-semibold">People also viewed</h1>
        {people.map((items, index) => {
          return (
            <div className="flex gap-4 items-center">
              <div>
                <img src={items.image.type} alt="" className="w-[100px]" />
              </div>

              <div>
                <div className="mt-6">
                  <h1 className="text-[14px] font-semibold">{items.name}</h1>
                  <p className="text-[12px]">{items.paragraph}</p>
                  <button>{items.message}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ads;
