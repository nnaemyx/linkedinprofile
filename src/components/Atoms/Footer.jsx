import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import {IoIosArrowDown} from 'react-icons/io'

const Footer = () => {
  return (
    <div className="lg:mt-[12rem]  mt-8">
      <div className="bg-white lg:h-[80px] h-[392px] lg:items-center lg:text-[13px] text-[12px] justify-between lg:container px-4 py-2 lg:py-0 lg:flex-row flex-col flex w-[100%] ">
        <div className="lg:flex gap-2 hidden items-center">
          <a href="google.com">Browse Jobs</a>
          <a href="google.com">Contact Us</a>
          <a href="google.com">About</a>
        </div>


        <div className="lg:hidden leading-[2.5rem] text-[15px]  ">
          <h1 className="flex justify items-center border-b  justify-between">Sign in<span><IoIosArrowDown/></span></h1>
          <h1 className="flex justify items-center border-b justify-between">For Hire<span><IoIosArrowDown/></span></h1>
          <h1 className="flex justify items-center border-b justify-between">Employers<span><IoIosArrowDown/></span></h1>
          <h1 className="flex justify items-center justify-between">About<span><IoIosArrowDown/></span></h1>
        </div>


        <div className="lg:mt-0 mt-6">
          <p>2022 Code & Jobs. All Right Reserved</p>
        </div>

        <div className="flex gap-2 lg:mb-0 mb-4 justify-between">
          <p>Hiring?</p>
          <button className="bg-primary px-3 flex items-center gap-2 -mt-2 py-2 rounded-md text-white">
            Post a Jobs{" "}
            <span className="lg:hidden flex">
              <FaGreaterThan />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;