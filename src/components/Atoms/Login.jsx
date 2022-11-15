import React from "react";
import Logo from "../../images/Logo (4).png";
import Image from "../../images/Illustration.svg";
import { IoIosArrowForward } from "react-icons/io";

import Google from "../../images/Icon (1).svg";
import Github from "../../images/Icon (2).svg";
import Linkedin from "../../images/Icon (3).svg";
import Discord from "../../images/Icon (4).svg";

const Login = () => {
  return (
    <div className="lg:px-[3rem] px-[1rem]  bg-white">
      <div className=" flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[35%]">
          <img src={Logo} alt="" className="mb-10" />
          <div>
            <h1 className="text-[26px] font-semibold">Sign In</h1>
            <p className="text-[15px] text-[#575757]">to access Code & Jobs</p>
          </div>
          <form action="" className="leading-[3rem] font-medium">
            <div className="block">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="lg:w-[120%] w-[100%] focus:outline-none focus:px-[1rem] rounded-md border-[4px] placeholder:text-[13px] placeholder:px-[1rem] border-[#F3F0EB]"
              />
            </div>
            <div className="block">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="lg:w-[120%] w-[100%] focus:outline-none focus:px-[1rem] rounded-md border-[4px] placeholder:text-[13px] placeholder:px-[1rem] border-[#F3F0EB]"
              />
            </div>

            <div className="lg:w-[120%] mt-6 w-[100%] justify-center text-center">
              <a
                href="google.com"
                className="lg:px-[12rem] px-[8rem] gap-1 items-center  py-1 flex rounded-md text-white text-[12.5px] lg:text-[15.5px] bg-[#26619C]"
              >
                Sign In
              </a>
            </div>

            <div className="text-center items-center border-b justify-center text-[16px] ">
              <p className="">Forgot Password?</p>
              <p className="text-[#26619C] underline underline-offset-4">
                Create an account
              </p>
            </div>

            <div>
              <p>Sign In using</p>
              <div className="flex gap-2">
                <img src={Google} alt="" />
                <img src={Github} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Discord} alt="" />
              </div>
            </div>
          </form>
        </div>

        <div className="pr-2 lg:pr-8 lg:px-[10rem]">
          <img src={Image} alt="" className="w-[901px] lg:mt-0 mt-8" />
          <div className="text-center mt-4">
            <h1 className="text-[20px] font-semibold">Gigs And People For Hire</h1>
            <p className="lg:text-[15px] text-[#575757]  text-[14px] lg:px-[4.6rem] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget eros suscipit purus consequat aliquet at a lectus. Proin et
              sem sapien. Donec ex orci, fermentum eu.
            </p>
          </div>
          <div className="lg:px-[14rem] px-[6rem]">
            <a
              href="google.com"
              className="flex  items-center px-[0.75rem] font-medium rounded-md text-[14px] text-[#26619C] py-2 bg-[#26619C]/10"
            >
              Learn More{" "}
              <span>
                <IoIosArrowForward size={15} />
              </span>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
