import React, { useState } from "react";
import Reviews from "../../images/star.svg";
// import Crypto from "../../images/crypto pay.svg";
// import Book from "../../images/book a call.svg";
import Share from "../../images/share link.svg";
import Report from "../../images/flag.svg";

function Morebtn() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFeatures = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        onClick={toggleFeatures}
        className="flex items-center px-3 py-[0.2rem] bg-white text-[#595959] font-medium border-[#595959] border rounded-full  text-sm transition duration-150 ease-in-out"
      >
        More
      </button>
      {isOpen && (
        <div className="container absolute left-[3rem] top-[25rem] lg:top-[35rem]  lg:left-[13rem] lg:w-[50%] w-[85%]">
          <div className="lg:w-[40%] w-[85%] h-[120px] bg-white shadows">
            <ul className="leading-9 lg:px-6 px-3 text-[13px]">
              <li className="flex lg:gap-6 gap-3   items-center">
                <span>
                  <img src={Reviews} alt="" />
                </span>
                Reviews
              </li>
              {/* <li className="flex gap-6 items-center">
            <span>
              <img src={Crypto} alt="" />
            </span>
            Crypto
          </li> */}
              {/* <li className="flex gap-6 items-center">
                <span>
                  <img src={Book} alt="" />
                </span>
                Schedule a Call
              </li> */}
              <li className="flex lg:gap-6 gap-3 items-center">
                <span>
                  <img src={Share} alt="" />
                </span>
                Share Via..
              </li>
              <li className="flex lg:gap-6 gap-3 items-center">
                <span>
                  <img src={Report} alt="" />
                </span>
                Report or Block
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Morebtn;
