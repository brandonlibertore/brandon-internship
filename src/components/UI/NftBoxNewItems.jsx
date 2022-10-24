import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/styles/NftBoxNewItems.css";

export default function NftBoxNewItems({
  authorImage,
  nftImage,
  title,
  price,
  likes,
  expiryDate,
}) {
  let nowTime = Date.now();
  // let seconds = expiryDate > 0 ? (expiryDate - nowTime) / 1000 : 0;
  const [seconds, setSeconds] = useState(
    expiryDate > 0 ? (expiryDate - nowTime) / 1000 : 0
  );
  // const [minutes, setMinutes] = useState((expiryDate - nowTime) / 1000 / 60);
  // const [hours, setHours] = useState((expiryDate - nowTime) / 1000 / 60 / 24);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds]);

  return (
    <div className="nft__newitems--container">
      <div className="nft__item">
        <div className="author_list_pp">
          <Link
            to="/author"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Creator: Monica Lucas"
          >
            <img className="lazy" src={authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        {seconds > 0 ? (
          <div className="de_countdown timeHtml">
            {
              <div>
                {Math.floor((seconds / 60 / 24) % 24) < 10
                  ? Math.floor((seconds / 60 / 24) % 24)
                      .toString()
                      .padStart(2, "0")
                  : Math.floor((seconds / 60 / 24) % 24)}
                h&nbsp;
                {Math.floor((seconds / 60) % 60) < 10
                  ? Math.floor((seconds / 60) % 60)
                      .toString()
                      .padStart(2, "0")
                  : Math.floor((seconds / 60) % 60)}
                m&nbsp;
                {Math.floor(seconds % 60) < 10
                  ? Math.floor(seconds % 60)
                      .toString()
                      .padStart(2, "0")
                  : Math.floor(seconds % 60)}
                s
              </div>
            }
          </div>
        ) : (
          ""
        )}
        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button>
              <div className="nft__item_share">
                <h4>Share</h4>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a
                  href="https://twitter.com/intent/tweet?url=https://gigaland.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <Link to="/item-details">
            <img src={nftImage} className="lazy nft__item_preview" alt="" />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to="/item-details">
            <h4>{title}</h4>
          </Link>
          <div className="nft__item_price">{price} ETH</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function NftBoxNewItems() {
//   return <div>{console.log(1)}</div>;
// }
