import React, {useState} from "react";
import { files } from "../../Data";
import Upload from "./Upload";
// import "./File.css";

const File = () => {
    const [openModal, setOpenModal] = useState(false);

  return (
    <div className="lg:px-10 px-4 bg-white rounded-md mt-[2rem]">
      <div className="py-[2rem] h-[150px]">
        <div className="flex justify-between items-center">
          <h1 className="lg:text-[20px] text-[13px] font-semibold">Files</h1>
          <div>
            <button onClick={() => setOpenModal(true)} className="px-[15px] py-[5px] border rounded-full text-[13px] lg:text-[14px] bg-primary text-white" >Upload</button>
            <Upload open={openModal} onClose={() => setOpenModal(false)}/>
          </div>
        </div>
        <div className="file_box flex lg:flex-row overflow-x-auto  gap-[1rem]">
          {files.map((items, index) => {
            return (
              <div className="flex items-center justify-between gap-4 border border-solid border-[#6B6868]/50 text-[13px] mt-[.5rem] lg:w-[40%] w-[180%] lg:px-[1rem] px-[3.5rem] py-1 rounded-[10px] leading-[1.4rem]" key={index}>
                <div className="-ml-9 lg:ml-0">
                  <p className="font-semibold">{items.name}</p>
                  <p className="text-[12px]">{items.docs}</p>
                </div>
                <img src={items.icon.type} alt="aa" className="ml-8 lg:ml-0" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default File;
