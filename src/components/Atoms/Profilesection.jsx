import React, {useState} from "react";
import { profile } from "../../Data";
import { GoLocation } from "react-icons/go";
import { FiUserPlus } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MoonIcon from "../../images/moon 2.svg";

import Messagebtn from "./Messagebtn";
// import {CgClose} from 'react-icons/cg'
import MobileProfille from "./MobileProfille";
import Follow from "./Follow";
import Morebtn from "./Morebtn";

const Profilesection = () => {
  const [click, setClick] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleNav = () => {
    setClick(!click);
  };

  return (
    <div className="bg-white lg:h-[530px] h-[375px] w-[100%] rounded-t-lg">
      <div className="bg-primary lg:h-[220px] h-[110px] lg:rounded-t-lg">
        {profile.map((items, index) => {
          return (
            <div
              key={index}
              className="lg:container px-4  flex justify-between"
            >
              <div>
                <div className="flex ml-[-1rem]">
                  <img
                    src={items.image.type}
                    alt=""
                    className="lg:mt-[8rem] mt-[2rem] lg:w-[200px] w-[132px]"
                  />
                  <div className="lg:mt-[14.5rem] hidden lg:block">
                    <p className="px-[8px] pt-[2px] pb-[4px] rounded-full text-[12px] text-white bg-[#65ab66]">
                      Available for hire
                    </p>
                  </div>
                </div>

                <div className=" leading-2">
                  <div className=" flex gap-[1rem] items-center ">
                    <h1 className="lg:text-[22px] text-[16px] font-semibold">
                      {items.name}
                    </h1>
                     <div className="flex items-center gap-[0.2rem]">
                      <img src={MoonIcon} alt="" className='w-[10.88px]' />
                      <span className="lg:text-[16px] text-[11.6px]">away</span>
                    </div>
                  </div>
                  <p className="lg:text-[14px] text-[12px] mb-2 text-[#636161]">
                    {items.username}
                  </p>
                  <p className="text-[#636161] lg:text-[17px] text-[13px]">
                    {items.software}
                  </p>
                  <div className="profile_location mb-[15px] flex items-center gap-[.3rem]">
                    <span>
                      <GoLocation />
                    </span>
                    <p className="lg:text-[17px] text-[13px]">
                      {items.location}
                    </p>
                  </div>
                  <div className="flex gap-1 lg:text-[17px] text-[13px] mb-4">
                    <button onClick={() => setOpenModal(true)}>
                      {" "}
                      <span className="font-semibold">4K</span> Followers
                    </button>
                    <button onClick={() => setOpenModal(true)}>
                      {" "}
                      <span className="font-semibold">1K</span> Following
                    </button>
                  </div>
                  <div className="lg:mt-[14.5rem] lg:hidden flex">
                    <p className="px-[8px] pt-[2px] pb-[4px] rounded-full text-[12px] text-white bg-[#65ab66]">
                      Available for hire
                    </p>
                  </div>
                  <div className="flex gap-2 mt-3 items-center">
                    <div>
                      <button  className="px-3 py-1 bg-primary text-white rounded-full flex items-center text-[12px]">
                        <span className="w-[14px]">{items.icon}</span>
                        {items.followbtn}
                      </button>
                      <Follow open={openModal} onClose={() => setOpenModal(false)}/>
                    </div>

                    <div>
                      <Messagebtn />
                    </div>

                    <div className="hidden lg:flex">
                     <Morebtn/>
                    </div>

                    <div>
                      <FiUserPlus size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Nav icon  */}
              <div  className="flex items-center -mt-[6rem]">
                 <div className="flex gap-1 mt-2 lg:hidden items-center text-[13px]">
                  <div>
                    <img
                      src={items.cryptoicon.type}
                      alt=""
                      className="w-[19px]"
                    />
                  </div>

                  <div>
                    <p>{items.crypto}</p>
                  </div>
                </div>
                <div onClick={handleNav} className="md:hidden mt-2 ">
                  
                  {click ? (
                    <BiDotsVerticalRounded size={20} />
                  ) : (
                    <BiDotsVerticalRounded size={20} />
                  )}
                </div>

              </div>
              
              {/* nav mobile */}
              <div
                className={`${
                  !click ? "hidden " : "left-[5rem]"
                } md:hidden  fixed overflow-auto bottom-0 top-[12rem]  w-full max-w-xs h-screen transition-all`}
              >
                <MobileProfille />
              </div>

              <div className="lg:pt-[14.5rem] md:pt-[14.5rem] hidden md:block">
                <button className="px-2 py-1 bg-primary text-white rounded-full text-[12px]">
                  {items.bookbtn}
                </button>
                <div className="flex gap-1 ml-[1.5rem] mt-2 items-center text-[13px]">
                  <div>
                    <img
                      src={items.cryptoicon.type}
                      alt=""
                      className="w-[19px]"
                    />
                  </div>

                  <div>
                    <p>{items.crypto}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profilesection;
