import React, { useState } from 'react';

const Followers = () => {
  const [selected, setSelected] = useState('followers');
  const [followersVisible, setFollowersVisible] = useState(true);
  const [followingVisible, setFollowingVisible] = useState(false);

  const followers = ['user1', 'user2', 'user3'];
  const following = ['user4', 'user5', 'user6'];

  const showFollowers = () => {
    setFollowersVisible(true);
    setFollowingVisible(false);
    setSelected('followers');
  };

  const showFollowing = () => {
    setFollowingVisible(true);
    setFollowersVisible(false);
    setSelected('following');
  };

  return (
    <div className="flex">
      <button
        className={`bg-blue-500  text-white font-bold py-2 px-4 rounded ${
          selected === 'followers' ? 'bg-blue-600' : ''
        }`}
        onClick={showFollowers}
      >
        Followers
      </button>
      <button
        className={`bg-blue-500  text-white font-bold py-2 px-4 rounded ${
          selected === 'following' ? 'bg-blue-600' : ''
        }`}
        onClick={showFollowing}
      >
        Following
      </button>
      {followersVisible && (
        <ul className="list-none p-0">
          {followers.map((follower) => (
            <li className="py-2" key={follower}>
              {follower}
            </li>
          ))}
        </ul>
      )}
      {followingVisible && (
        <ul className="list-none p-0">
          {following.map((user) => (
            <li className="py-2" key={user}>
              {user}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Followers;
