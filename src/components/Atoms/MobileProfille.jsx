import React from "react";
import Reviews from "../../images/star.svg";
import Crypto from "../../images/crypto pay.svg";
import Book from "../../images/book a call.svg";
import Share from "../../images/share link.svg";
import Report from "../../images/flag.svg";

const MobileProfille = () => {
  return (
    <div className="container">
      <div
        className="w-[100%] h-[184px]  bg-white shadows"
      >
        <ul className="leading-9 px-6 text-[13px]">
          <li className="flex gap-6  items-center">
            <span>
              <img src={Reviews} alt="" />
            </span>
            Give Reviews
          </li>
          <li className="flex gap-6 items-center">
            <span>
              <img src={Crypto} alt="" />
            </span>
            Crypto
          </li>
          <li className="flex gap-6 items-center">
            <span>
              <img src={Book} alt="" />
            </span>
            Book a Call
          </li>
          <li className="flex gap-6 items-center">
            <span>
              <img src={Share} alt="" />
            </span>
            Share Via..
          </li>
          <li className="flex gap-6 items-center">
            <span>
              <img src={Report} alt="" />
            </span>
            Report or Block
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileProfille;
