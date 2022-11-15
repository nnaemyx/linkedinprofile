import React from "react";
import Logo from "../../images/Logo (4).png";
import Image from "../../images/Illustration (1).svg";
import { IoIosArrowForward } from "react-icons/io";

const Signup = () => {
  return (
    <div className="lg:pl-[3rem] px-[1rem] font-secondary sign bg-white">
      <div className=" flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[35%] lg:pl-[10rem]">
          <img src={Logo} alt="" className="mb-10" />
          <div>
            <h1 className="text-[26px] font-semibold">
              Sign up for Code & Jobs
            </h1>
            <p className="text-[15px] text-[#575757]">
              Create a free account or{" "}
              <a href="google.com" className="text-[#26619C]">
                log in
              </a>
            </p>
          </div>
          <form action="" className="leading-[3rem] font-medium">
            <div className="block">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="lg:w-[170%] w-[100%] mb-4 mt-4 focus:outline-none focus:px-[1rem] rounded-md border-[4px] placeholder:text-[13px] placeholder:px-[1rem] border-[#F3F0EB]"
              />
            </div>
            <div className="block">
              <input
                type="text"
                placeholder="Enter Username"
                className="lg:w-[170%] w-[100%] mb-4 focus:outline-none focus:px-[1rem] rounded-md border-[4px] placeholder:text-[13px] placeholder:px-[1rem] border-[#F3F0EB]"
              />
            </div>
            <div className="block">
              <input
                type="password"
                placeholder="Enter Password"
                className="lg:w-[170%] w-[100%] focus:outline-none focus:px-[1rem] rounded-md border-[4px] placeholder:text-[13px] placeholder:px-[1rem] border-[#F3F0EB]"
              />
            </div>
          </form>

          <div className="flex text-[13px] gap-2 lg:w-[37rem] mt-4  text-[#575757] font-[440px] ">
            <div className="mt-1">
              <input type="checkbox" />
            </div>
            <div>
              <p className="">
                I don't want to receive emails about Code&Jobs and feature
                updates, marketing best practices, and promotions from Code &
                Jobs.
              </p>
            </div>
          </div>
          <div className="mt-4 text-[#575757] ">
            <p className="text-[13px] lg:w-[35rem]  mb-6">
              By creating an account, you agree to our{" "}
              <span className="text-[#26619C] underline underline-offset-4">
                Terms
              </span>{" "}
              and have read and acknowledge the{" "}
              <span className="text-[#26619C] underline underline-offset-4">
                Global Privacy Statement.
              </span>
            </p>
            <div className="w-[7rem]">
              <a
                href="google.com"
                className="px-6 gap-1 items-center py-3 flex rounded-md text-white text-[12.5px] bg-[#26619C]"
              >
                Sign Up
                <span>
                  <IoIosArrowForward size={15} />
                </span>
              </a>
            </div>
            <p className="mt-4 text-[12px]">
              Invisible reCAPTCHA by{" "}
              <span className=" underline underline-offset-4">
                Google Privacy Policy{" "}
              </span>{" "}
              and{" "}
              <span className="underline underline-offset-4">Terms of Use</span>
            </p>
            .
          </div>
        </div>

        <div className="pr-8">
          <div className="bg-pattern bg-center"></div>
          <img src={Image} alt="" className="w-[401px]" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
