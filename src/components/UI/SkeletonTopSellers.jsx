import React from "react";
import { Link } from "react-router-dom";
import "../../../src/css/styles/SkeletonTopSellers.css";

export default function SkeletonTopSellers() {
  return (
    <li>
      <div className="author_list_pp">
        <Link to={`/author`}>
          <div className="skeleton__avatar--wrapper">
            <div className="skeleton__avatar--img-topSellers">
              <div className="shimmerBG"></div>
            </div>
          </div>
          <i className="fa fa-check"></i>
        </Link>
      </div>
      <div className="author_list_info">
        <div className="skeleton__topSellers--title">
          <div className="shimmerBG"></div>
        </div>
        <div className="skeleton__topSellers--price">
          <div className="shimmerBG"></div>
        </div>
      </div>
    </li>
  );
}
