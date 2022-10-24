import React from "react";

export default function SkeletonTopSellers() {
  return (
    <li>
      <div className="author_list_pp">
        <Link to={`/author/${authorId}`}>
          <img className="lazy pp-author" src={authorImage} alt="" />
          <i className="fa fa-check"></i>
        </Link>
      </div>
      <div className="author_list_info">
        <Link to={`/author/${authorId}`}>{authorName}</Link>
        <span>{price} ETH</span>
      </div>
    </li>
  );
}
