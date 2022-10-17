import React from "react";
import { Link } from "react-router-dom";

const NftBox = ({ nftImage, authorImage, title, code }) => {
  return (
    <div className="nft_container" key={code}>
      <div className="nft_coll">
        <div className="nft_wrap">
          <Link to="/item-details">
            <img src={nftImage} className="lazy img-fluid" alt="" />
          </Link>
        </div>
        <div className="nft_coll_pp">
          <Link to="/author">
            <img className="lazy pp-coll" src={authorImage} alt="" />
          </Link>
          <i className="fa fa-check"></i>
        </div>
        <div className="nft_coll_info">
          <Link to="/explore">
            <h4>{title}</h4>
          </Link>
          <span>ERC-{code}</span>
        </div>
      </div>
    </div>
  );
};

export default NftBox;
