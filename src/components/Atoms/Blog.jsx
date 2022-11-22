import React, { useState } from "react";
import Plus from "../../images/plus.svg";
import Line from "../../images/Line 9.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { blog } from "../../Data";

const Blog = () => {
  const [click, setClick] = useState(false);
  const handleNav = () => {
    setClick(!click);
  };
  return (
    <div className="lg:w-[850px]">
      <div className="flex gap-4 items-center">
        <img src={Plus} alt="" />
        <a href="google.com">For You</a>
        <a href="google.com">Following</a>
      </div>

      <img src={Line} alt="" />
      <div>
        {blog.map((items, index) => {
          return (
            <div key={index} className="mt-8 lg:ml-10 ml-5">
              <div className="flex items-center">
                <div>
                  <img src={items.imageleft.type} alt="" />
                </div>

                <div>
                  <div className="flex text-[14px] font-semibold">
                    <p>{items.name}</p>
                    <p>{items.date}</p>
                  </div>
                  <p className="text-[12px] text-[#6B6868]">{items.software}</p>
                </div>
              </div>
              <div className="flex items-center lg:gap-20 gap-4">
                <div>
                  <h1 className="lg:text-[18px] font-[800] lg:mb-7 mb-1 lg:-mt-0 -mt-8">
                    {items.heading}
                  </h1>
                  <p className="w-[430px] text-[16px] text-[#6B6868] lg:flex hidden lg:mb-4">
                    {items.paragraph}
                  </p>
                </div>

                <div className="lg:pt-0 pt-[1rem]">
                  <img
                    src={items.imageright.type}
                    className="lg:h-auto  h-[60px]"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex items-center text-[#6B6868] mb-8 lg:gap-[8rem] gap-4">
                <div className="flex text-[12px] gap-4">
                  <p className="border rounded-full bg-[#E6E6E6] -mt-1 py-1 px-3">
                    Web 3
                  </p>
                  <p>6 min read</p>
                  <p className="lg:flex hidden">Selected for you</p>
                </div>

                <div className="flex gap-2">
                  <MdOutlineBookmarkAdd size={20} />
                  {/* Nav icon  */}
                  <div onClick={handleNav} className="">
                    {click ? (
                      <BiDotsHorizontalRounded size={25} />
                    ) : (
                      <BiDotsHorizontalRounded size={25} />
                    )}
                  </div>
                </div>
              </div>
              <img src={Line} alt="" className="-ml-10" />
              <div
                className={`${
                  !click ? "hidden " : "lg:left-[33rem]"
                }  fixed overflow-auto bottom-0 top-[20rem]  w-full max-w-xs h-screen transition-all`}
              >
                <div className="bg-white px-8 py-3 leading-7 font-medium w-40 text-[12px]">
                  <p>Mute this author</p>
                  <p>Report of block</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
