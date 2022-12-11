import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const Follow = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="bg-black/40 top-[0.01rem] left-[0.01rem] overflow-auto fixed w-[100%] h-[100%] ">
      <div className="rounded-md fixed top-[20%] max-w-[800px] overflow-y-auto max-h-[100%]  lg:left-[15%] left-[5%] h-[455px] lg:w-[902px] w-[310px]  bg-white">
        <div className="flex px-[1rem] mt-4 justify-between">
          <div className="flex gap-2 items-center">
            <BsArrowLeftShort onClick={onClose} size={25} />
            <h1 className="font-semibold text-[18px]">Alisha Tiffany</h1>
          </div>
        </div>
        <p className="px-[3rem] text-[14px] -mt-[.1rem]">@alishatiffany</p>

        <div className="flex text-[#6B6868] font-semibold lg:gap-[24rem] mt-5 lg:px-[6rem]">
          <button>Followers</button>
          <button>Following</button>
        </div>
        <hr className="w-[100%] text-[#6B6868]/50 mt-2" />
      </div>
    </div>
  );
};

export default Follow;
