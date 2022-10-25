import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AuthorHeader({
  authorImage,
  authorName,
  tag,
  address,
  followers,
}) {
  const initialFollower = followers;
  const [follows, setFollows] = useState(followers);

  function incrementFollowers() {
    const followBtn = document.querySelector(".follow__btn");
    if (follows === initialFollower) {
      setFollows(follows + 1);
      followBtn.innerText = "Unfollow";
    } else {
      setFollows(follows - 1);
      followBtn.innerText = "Follow";
    }
  }

  useEffect(() => {}, [follows]);

  return (
    <>
      <div className="de-flex-col">
        <div className="profile_avatar">
          <img src={authorImage} alt="" />

          <i className="fa fa-check"></i>
          <div className="profile_name">
            <h4>
              {authorName}
              <span className="profile_username">@{tag}</span>
              <span id="wallet" className="profile_wallet">
                {address}
              </span>
              <button id="btn_copy" title="Copy Text">
                Copy
              </button>
            </h4>
          </div>
        </div>
      </div>
      <div className="profile_follow de-flex">
        <div className="de-flex-col">
          <div className="profile_follower">{follows} followers</div>
          <Link
            to="#"
            className="btn-main follow__btn"
            onClick={() => incrementFollowers()}
          >
            Follow
          </Link>
        </div>
      </div>
    </>
  );
}
