import React from "react";
import Plus from "../../images/plus.svg";
import Line from "../../images/Line 9.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { blog } from "../../Data";

const Blog = () => {
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
                  <p className="text-[12px]">{items.software}</p>
                </div>
              </div>
              <div className="flex items-center lg:gap-20 gap-4">
                <div>
                  <h1 className="lg:text-[18px] font-[800] lg:mb-7 mb-1 lg:-mt-0 -mt-8">{items.heading}</h1>
                  <p className="w-[430px] text-[16px] lg:flex hidden lg:mb-4">{items.paragraph}</p>
                </div>

                <div className="lg:pt-0 pt-[1rem]">
                  <img src={items.imageright.type} className='lg:h-auto  h-[60px]' alt="" />
                </div>
              </div>

              <div className="flex items-center mb-8 lg:gap-[8rem] gap-4">
                <div className="flex text-[12px] gap-4">
                  <p className="border rounded-full bg-[#E6E6E6] -mt-1 py-1 px-3">Web 3</p>
                  <p>6 min read</p>
                  <p className="lg:flex hidden">Selected for you</p>
                </div>

                <div className="flex gap-2">
                  <MdOutlineBookmarkAdd size={20} />
                  <BiDotsHorizontalRounded size={20} />
                </div>
              </div>
                    <img src={Line} alt="" />

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
