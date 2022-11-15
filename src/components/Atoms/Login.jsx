import React from "react";
import Logo from "../../images/Logo (4).png";
import Image from "../../images/Illustration.svg";

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
                className="lg:w-[170%] w-[100%] focus:outline-none focus:px-[1rem] rounded-md border-[4px] placeholder:text-[13px] placeholder:px-[1rem] border-[#F3F0EB]"
              />
            </div>
            <div className="block">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="lg:w-[170%] w-[100%] focus:outline-none focus:px-[1rem] rounded-md border-[4px] placeholder:text-[13px] placeholder:px-[1rem] border-[#F3F0EB]"
              />
            </div>

            <div className="lg:w-[170%] mt-6 w-[100%] justify-center text-center">
              <a
                href="google.com"
                className="lg:px-[19rem] px-[8rem] gap-1 items-center  py-1 flex rounded-md text-white text-[12.5px] lg:text-[15.5px] bg-[#26619C]"
              >
                Sign In
               
              </a>
            </div>
          </form>
        </div>

        <div className="pr-8">
          <img src={Image} alt="" className="w-[401px]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
