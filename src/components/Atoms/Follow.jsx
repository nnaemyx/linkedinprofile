import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { followers, following } from "../../Data";

const Follow = ({ open, onClose }) => {
  const [selected, setSelected] = useState("followers");
  const [followersVisible, setFollowersVisible] = useState(true);
  const [followingVisible, setFollowingVisible] = useState(false);

  

  const showFollowers = () => {
    setFollowersVisible(true);
    setFollowingVisible(false);
    setSelected("followers");
  };

  const showFollowing = () => {
    setFollowingVisible(true);
    setFollowersVisible(false);
    setSelected("following");
  };
  if (!open) return null;
  return (
    <div className="bg-black/40 top-[0.01rem] left-[0.01rem] overflow-auto fixed w-[100%] h-[100%] ">
      <div className="rounded-md fixed top-[20%] max-w-[800px] overflow-y-auto max-h-[100%]  lg:left-[15%] left-[5%] h-[455px] lg:w-[902px] w-[310px]  bg-white">
        <div className="flex px-[1rem] mt-4 justify-between">
          <div className="flex gap-2 items-center">
            <BsArrowLeftShort onClick={onClose} size={25} />
            <h1 className="font-semibold text-[18px]">Alisha Tiffany</h1>
          </div>
        </div>
        <p className="px-[3rem] text-[14px] -mt-[.1rem]">@alishatiffany</p>

        <div className="flex font-semibold lg:gap-[24rem] mt-5 lg:px-[6rem]">
          <button
            className={` text-[#6B6868]  font-bold py-2 px-4 rounded ${
              selected === "followers" ? "border-b-4 border-primary text-black" : ""
            }`}
            onClick={showFollowers}
          >
            Followers
          </button>
          <button
            className={`text-[#6B6868]  font-bold py-2 px-4 rounded ${
              selected === "following" ? "border-b-4 text-black border-primary" : ""
            }`}
            onClick={showFollowing}
          >
            Following
          </button>
        </div>
          <hr className="w-[100%] text-[#6B6868]/50 mt-2" />
        {followersVisible && (
          <ul className="list-none p-0">
            {followers.map((follower, index) => (
              <img src= {follower.image.type} className="py-2" alt='ok' key={index}/>
                
            ))}
          </ul>
        )}
        {followingVisible && (
          <ul className="list-none p-0">
            {following.map((user, index) => (
              <li className="py-2" key={index}>
                {user.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Follow;
