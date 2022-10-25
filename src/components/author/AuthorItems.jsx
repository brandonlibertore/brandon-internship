import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SkeletonNewItems from "../UI/SkeletonNewItems";
import NftBoxNewItems from "../UI/NftBoxNewItems";

const AuthorItems = ({ authorImage }) => {
  const [loading, setLoading] = useState(false);
  const [nft, setNft] = useState([]);
  let { id } = useParams();

  async function fetchNft() {
    setLoading(true);
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
    );
    setNft(data.nftCollection);
    setLoading(false);
  }

  useEffect(() => {
    fetchNft();
  }, []);

  console.log(nft);

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {loading
            ? new Array(8).fill(0).map((_, index) => (
                <div className="explore__nft--wrapper">
                  <SkeletonNewItems key={index} />
                </div>
              ))
            : nft.map((details) => (
                <div className="explore__nft--wrapper" key={details.id}>
                  <NftBoxNewItems
                    key={details.id}
                    authorId={id}
                    authorImage={authorImage}
                    nftImage={details.nftImage}
                    nftId={details.nftId}
                    title={details.title}
                    price={details.price}
                    likes={details.likes}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
