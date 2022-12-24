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

        <div className="flex font-semibold lg:gap-[24rem] gap-10 px-[2rem] mt-5 lg:px-[6rem]">
          <button
            className={` text-[#6B6868] text-[13px] lg:text-[15px] font-bold py-2 px-4 rounded ${
              selected === "followers"
                ? "border-b-2 border-primary text-black"
                : ""
            }`}
            onClick={showFollowers}
          >
            Followers
          </button>
          <button
            className={`text-[#6B6868] text-[13px] lg:text-[15px] font-bold py-2 px-4 rounded ${
              selected === "following"
                ? "border-b-2 text-black border-primary"
                : ""
            }`}
            onClick={showFollowing}
          >
            Following
          </button>
        </div>
        <hr className="w-[100%] text-[#6B6868]/50 mt-2" />
        {followersVisible && (
          <div className="mt-4 lg:p-0">
            {followers.map((follower, index) => (
              <div className="flex justify-between mb-4 px-2  lg:container" key={index}>
                <div className="flex items-center">
                  <div>
                    <img src={follower.image.type} className="w-[60px]" alt="ok" />
                  </div>
                  <div>
                    <h1 className="text-[12px] font-semibold">{follower.name}</h1>
                    <p className="text-[10px] font-normal">{follower.username}</p>
                    <p className="text-[11.5px] font-semibold">{follower.paragraph}</p>
                  </div>
                </div>

                <div>
                  <button className="lg:text-[12px] text-[10px] text-[#6B6868] font-medium px-4 border border-[#6B6868] rounded-full py-1">{follower.following}</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {followingVisible && (
          <div className="p-0">
            {following.map((user, index) => (
              <div className="py-2" key={index}>
                {user.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Follow;
