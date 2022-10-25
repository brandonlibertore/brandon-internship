import React from "react";
import { Link } from "react-router-dom";
import "../../css/styles/SkeletonItemDetails.css";

export default function SkeletonItemDetails() {
  return (
    <div className="row">
      <div className="col-md-6 text-center">
        <div className="img-fluid img-rounded mb-sm-30 nft-image nft__img--wrapper">
          <div className="shimmerBG"></div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="item_info">
          <div className="item__info--itemDetails">
            <div className="shimmerBG"></div>
          </div>

          <div className="item_info_counts">
            <div className="item_info_views item__info--views">
              <i className="fa fa-eye item__info--views"></i>
              Views
            </div>
            <div className="item_info_like item__info--likes">
              <i className="fa fa-heart item__info--likes"></i>
              Likes
            </div>
          </div>
          <div className="item__info--description">
            <div className="shimmerBG"></div>
          </div>
          <div className="d-flex flex-row">
            <div className="mr40">
              <h6>Owner</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <Link to="/author">
                    <div className="img--itemDetails">
                      <div className="shimmerBG"></div>
                    </div>
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to="/author">
                    <div className="name--itemDetails">
                      <div className="shimmerBG"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="de_tab tab_simple">
            <div className="de_tab_content">
              <h6>Creator</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <Link to="/author">
                    <div className="img--itemDetails">
                      <div className="shimmerBG"></div>
                    </div>
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="author_list_info">
                  <Link to="/author">
                    <div className="name--itemDetails">
                      <div className="shimmerBG"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="spacer-40"></div>
            <h6>Price</h6>
            <div className="nft-item-price">
              <div className="price--itemDetails">
                <div className="shimmerBG"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
