import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import "../../css/styles/SkeletonNewItems.css";

const SkeletonNewItems = () => {
  return (
    <div className="skeleton__newItems--container">
      <div className="nft__item">
        <div className="author_list_pp">
          <div className="skeleton__newItems--author-list">
            <div className="shimmerBG"></div>
          </div>
        </div>
        <div className="de_countdown skeleton__countdown--wrapper">
          <div className="skeleton__countdown">
            <div className="shimmerBG"></div>
          </div>
        </div>

        <div className="nft__item_wrap skeleton__nft--container">
          <div className="shimmerBG"></div>
          <img
            src={nftImage}
            className="lazy nft__item_preview skeleton__nft--logo"
            alt=""
          />
        </div>
        <div className="nft__item_info">
          <div className="skeleton__newItem--title">
            <div className="shimmerBG"></div>
          </div>
          <div className="skeleton__newItem--price">
            <div className="shimmerBG"></div>
          </div>
          <div className="nft__item_like skeleton__newItem--likes">
            <div className="shimmerBG"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonNewItems;
