import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { reviews } from "../../Data";

function DisclosureReviews() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclosure = () => setIsOpen(!isOpen);

  return (
    <div className="relative bg-white rounded-md mt-10">
      <button
        onClick={toggleDisclosure}
        className="flex justify-between gap-[14rem]  items-center lg:px-4 py-2 lg:-mt-6 text-[17px] lg:w-[830px]  lg:pl-[2rem] pl-[1rem] lg:h-[104px] font-semibold leading-5  transition duration-150 ease-in-out"
      >
        Reviews
        <div>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </button>

      {isOpen && (
        <div className="lg:-mt-4">
          {reviews.map((review, index) => (
            <div key={index} className="mb-5  ">
              <div className="flex justify-between lg:px-4 px-4 lg:pl-[1rem] pl-[1rem]">
                <div className="flex mb-5 lg:gap-1">
                  <img
                    src={review.image.type}
                    alt=""
                    className="w-[33px] h-[33px]"
                  />
                  <div className="flex lg:gap-10 items-center">
                    <div>
                      <h1 className="lg:text-[14px] text-[13px] font-semibold">
                        {review.name}
                      </h1>
                      <p className="text-[10px] font-normal -mt-1">
                        {review.paragraph}
                      </p>
                    </div>
                    <div className="hidden lg:flex">
                      <p className="text-[14px] font-medium">
                        {review.paragraph1}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <AiFillStar className="text-[orange] w-[15px]" />
                  <AiFillStar className="text-[orange] w-[15px]" />
                  <AiFillStar className="text-[orange] w-[15px]" />
                  <AiFillStar className="text-[orange] w-[15px]" />
                  <AiFillStar className="w-[15px]" />
                </div>
              </div>
              <div className="lg:hidden px-4 -mt-4">
                <p className="text-[12px] font-medium">{review.paragraph1}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DisclosureReviews;
