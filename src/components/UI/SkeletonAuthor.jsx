import React from "react";
import { Link } from "react-router-dom";
import "../../css/styles/SkeletonAuthor.css";

export default function SkeletonAuthor() {
  return (
    <>
      <div className="de-flex-col">
        <div className="profile_avatar">
          <div className="profile__avatar--img-author">
            <div className="shimmerBG"></div>
          </div>

          <i className="fa fa-check"></i>
          <div className="profile_name">
            <h4>
              <div className="profile__name--author">
                <div className="shimmerBG"></div>
              </div>
              <div className="profile_username profile__username--author">
                <div className="shimmerBG"></div>
              </div>
              <div
                id="wallet"
                className="profile_wallet profile__wallet--author"
              >
                <div className="shimmerBG"></div>
              </div>
              <button id="btn_copy" title="Copy Text">
                Copy
              </button>
            </h4>
          </div>
        </div>
      </div>
      <div className="profile_follow de-flex">
        <div className="de-flex-col">
          <div className="profile_follower profile__follower--author">
            <div className="shimmerBG"></div>
          </div>
          <div className="btn__main--author">
            <div className="shimmerBG"></div>
          </div>
        </div>
      </div>
    </>
  );
}
