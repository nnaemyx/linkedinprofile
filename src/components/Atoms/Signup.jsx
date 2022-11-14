import React from "react";
import Logo from "../../images/Logo (4).png";
import Image from "../../images/Illustration (1).svg";

const Signup = () => {
  return (
    <div className="pl-[10rem]  bg-white">
      <div className=" flex justify-between">
        <div className="w-[35%] h-[120rem]">
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
              <label>Email Address</label>
              <input
                type="text"
                placeholder="Enter Email Address"
                className="w-[170%] rounded-md border-[4px] placeholder:text-[13px] placeholder:px-[1rem] border-[#F3F0EB]"
              />
            </div>
            <div className="block">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-[170%] rounded-md border-[4px] placeholder:text-[13px] placeholder:px-[1rem] border-[#F3F0EB]"
              />
            </div>
            <div className="block">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-[170%] rounded-md border-[4px] placeholder:text-[13px] placeholder:px-[1rem] border-[#F3F0EB]"
              />
            </div>
          </form>

          <div className="flex text-[13px] gap-2 w-[37rem] mt-4 text-[#575757] font-[440px] ">
            <input type="checkbox" />
            <p className="">
              I don't want to receive emails about Code&Jobs and feature
              updates, marketing best practices, and promotions from Code &
              Jobs.
            </p>
          </div>
            <div>
            <p>
                By creating an account, you agree to our Terms and have read and
                acknowledge the Global Privacy Statement.
                    </p>
                    <input type="submit" />
            </div>
        </div>


        <div className="pr-8">
          <img src={Image} alt="" className="w-[401px]" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
