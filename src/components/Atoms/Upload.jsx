import React from "react";
import { GrFormClose } from "react-icons/gr";
import { MdAttachFile } from "react-icons/md";

const Upload = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="bg-black/40 top-[0.01rem] left-[0.01rem] overflow-auto fixed w-[100%] h-[100%] ">
      <div className="rounded-md fixed top-[20%] max-w-[800px] overflow-y-auto max-h-[100%]  lg:left-[23%] left-[5%] h-[355px] lg:w-[603px] w-[310px]  bg-white">
        <div className="flex lg:px-[3.1rem] px-[1rem] mt-4 justify-between">
          <div className="flex gap-2 items-center">
            <GrFormClose onClick={onClose} size={25} />
            <h1 className="font-semibold text-[18px]">Upload File</h1>
          </div>
          <button className="border bg-black text-white text-[15px] px-4 py-1 rounded-full">
            Save
          </button>
        </div>

        <form action="" className="mt-[2rem] px-[1rem] lg:container">
          <div className="">
            <label className="font-semibold">Name of File</label>
            <input
              type="text"
              name="name"
              placeholder=""
              className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
              id=""
            />
          </div>
          <label className="font-semibold">Type of File</label>
          <div className="block">
            <input
              type="text"
              name="name"
              placeholder=""
              className="lg:w-[20%] w-[40%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
              id=""
            />
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex items-center relative justify-center">
              <input
                type="text"
                name="name"
                placeholder=""
                className="w-[100%] font-[500] border focus:outline-none rounded-md py-2 px-2 mt-2 mb-4 border-[#6B6868]/50"
                id=""
              />
              <span className="absolute left-[11rem]">
                <MdAttachFile />
              </span>
            </div>
            <h1 className="text-[12.5px] lg:text-[16px]">Attach file</h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
