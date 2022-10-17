import React from "react";
import "../../../src/css/styles/SkeletonHotCollections.css";

export default function SkeletonHotCollections() {
  return (
    <div className="nft__container skeleton__hot--collections-container ">
      <div className="nft_coll">
        <div className="nft_wrap skeleton__hot--collections-coll">
          <div className="nft_wrap skeleton__hot--collections-coll shimmerBG">
            <img
              src={
                "https://nft-place.web.app/static/media/coll-1.b8f9d867e8ed59ee7fa7.jpg"
              }
              className="lazy img-fluid skeleton__nft--logo"
              alt=""
            />
          </div>
        </div>
        <div className="nft_coll_pp skeleton__avatar--wrapper">
          <div className="skeleton__avatar--img">
            <div className="shimmerBG"></div>
          </div>
        </div>
        <div className="nft_coll_info skeleton__info">
          <div className="skeleton__title">
            <div className="shimmerBG"></div>
          </div>
          <div className="skeleton__code">
            <div className="shimmerBG"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
