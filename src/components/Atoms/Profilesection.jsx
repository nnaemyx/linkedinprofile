import React, {useState} from "react";
import { profile } from "../../Data";
import { BiDotsVerticalRounded } from 'react-icons/bi'
// import {CgClose} from 'react-icons/cg'
import MobileProfille from "./MobileProfille";


const Profilesection = () => {
  const [click, setClick] = useState(false)
  const handleNav = () => {
        setClick(!click);
    }

  return (
    <div className="md:h-[460px] h-[300px] md:bg-white bg-[#F8F6F3] lg:rounded-t-[10px]">
      <div className="bg-primary lg:w-[830px]  md:rounded-t-[10px] h-[110px] md:h-[202px]">
        {profile.map((items, index) => {
          return <div className="flex justify-between" key={index}>
            <div>
              <div>
                <img src={items.image.type} alt="" className=' md:pt-[7rem] md:w-[180px] w-[160px] md:h-[280px]' />
              </div>
              <div className="md:pl-[2rem] pl-[1rem]">
                <h1 className="md:text-[20px] font-semibold">{items.heading}</h1>
                <p className="md:text-[18px] text-[12.17px] lg:font-normal font-medium">{items.paragraph}</p>
                <div className="flex md:text-[18px] text-[12.17px] lg:font-normal font-medium gap-2">
                  <div>
                    <p>{items.followers}</p>
                  </div>

                  <div>
                    <a href="google.com" className="text-primary">{ items.contact}</a>
                  </div>
                </div>

                <div className="mt-2">
                  <button className="px-3 py-1 text-[12px] text-white rounded-full bg-secondary">{items.availablebtn}</button>
                  <div className="flex gap-1 mt-2">
                    <div>
                      <button className="px-3 py-1 bg-primary text-white rounded-full flex items-center text-[12px]"><span className="w-[14px]">{items.icon}</span>{items.followbtn }</button>
                    </div>

                    <div>
                      <button className="px-3 py-1 bg-primary text-white rounded-full text-[12px]">{ items.messagebtn}</button>
                    </div>

                    <div>
                      <button className="px-3 py-[0.15rem] border-2 border-primary hidden lg:flex text-primary rounded-full text-[12px]">{ items.morebtn}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pt-[14.5rem] md:pt-[14.5rem] hidden md:block pr-[5rem]">
              <button className="px-2 py-1 bg-primary text-white rounded-full text-[12px]">{items.bookbtn}</button>
              <div className="flex gap-2 mt-2 items-center text-[13px]">
                <div>
                  <img src={items.cryptoicon.type} alt="" className="w-[19px]" />
                </div>

                <div>
                  <p>{ items.crypto}</p>
                </div>
              </div>
            </div>

            {/* Nav icon  */}
            <div
              onClick={handleNav}
              className="md:hidden pt-[7.5rem] ">
                
              {click ? <BiDotsVerticalRounded size={25} />  : <BiDotsVerticalRounded size={25} />}
              
            </div>


            {/* nav mobile */}
          <div
            className={`${
              click ? "-right-full" : "left-[5rem]"
            } md:hidden fixed overflow-auto bottom-0 top-[12rem]  w-full max-w-xs h-screen transition-all`}
          >
            <MobileProfille />
          </div>

          </div>;
        })}
      </div>
    </div>
  );
};

export default Profilesection;
