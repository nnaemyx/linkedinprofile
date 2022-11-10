import React from "react";
import Notification from "../../images/bell.svg";

const Recentblog = () => {
  return (
    <div className="bg-white mt-6 rounded-md">
      <div className="lg:w-[830px] py-8  lg:pl-[2rem] pl-[1rem] lg:h-[200px]">
        <div className="flex justify-between">
          <div>
            <h1 className="flex items-center gap-2 font-semibold text-[17px]">
              Recent Blog Post
              <span>
                <img src={Notification} alt="" />
              </span>
            </h1>
            <h1 className="mt-2 text-[12.7px]">Alisha just posted, 2d</h1>
            <div className="bg-black mt-3 items-center w-[49px] h-[49px] ">
              <p className="text-[7px] px-1 py-3 text-left text-white">How to Learn Code</p>
            </div>
            <p className="font-semibold text-[13px]">How to Learn <br/>Code </p>
          </div>

          <div className="lg:pr-[24rem] lg:w-[4rem] w-[6rem] xl:pr-[0rem] xl:w-[6rem]">
            <button className="px-2 py-1 mb-2 text-[12px] border-2 rounded-full border-[#595959] text-[#595959]">
              + Follow
            </button>
            <button className="px-4 py-1 text-[12px] border-2 rounded-full border-[#595959] text-[#595959]">
              View Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recentblog;
