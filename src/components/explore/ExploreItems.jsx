import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SkeletonNewItems from "../UI/SkeletonNewItems";
import NftBoxNewItems from "../UI/NftBoxNewItems";
import "../../css/styles/ExploreItems.css";

const ExploreItems = () => {
  const [loading, setLoading] = useState(false);
  const [nft, setNft] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(8);
  const initialPosts = nft.slice(0, index);
  const [filter, setFilter] = useState("");

  async function fetchNft() {
    setLoading(true);
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`
    );
    setNft(data);
    setLoading(false);
  }

  const loadMore = () => {
    setIndex(index + 4);
    if (index >= nft.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  useEffect(() => {
    fetchNft();
  }, [filter]);

  return (
    <>
      <div>
        <select
          id="filter-items"
          defaultValue=""
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {loading
        ? new Array(8).fill(0).map((_, index) => (
            <div className="explore__nft--wrapper">
              <SkeletonNewItems key={index} />
            </div>
          ))
        : initialPosts.map((details) => (
            <div className="explore__nft--wrapper">
              <NftBoxNewItems
                key={details.id}
                authorId={details.authorId}
                authorImage={details.authorImage}
                nftImage={details.nftImage}
                nftId={details.nftId}
                title={details.title}
                price={details.price}
                likes={details.likes}
                expiryDate={details.expiryDate}
              />
            </div>
          ))}
      {isCompleted ? (
        ""
      ) : (
        <div className="col-md-12 text-center">
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={() => loadMore()}
          >
            Load more
          </Link>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
