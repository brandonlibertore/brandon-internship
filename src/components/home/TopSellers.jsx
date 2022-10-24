import React, { useState, useEffect } from "react";
import axios from "axios";
import SkeletonTopSellers from "../UI/SkeletonTopSellers";
import NftBoxTopSellers from "../UI/NftBoxTopSellers";

const TopSellers = () => {
  const [loading, setLoading] = useState(false);
  const [nft, setNft] = useState([]);

  async function fetchNft() {
    setLoading(true);
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers"
    );
    setLoading(false);
    setNft(data);
  }

  useEffect(() => {
    fetchNft();
  }, []);

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {loading
                ? new Array(12)
                    .fill(0)
                    .map((_, index) => <SkeletonTopSellers key={index} />)
                : nft.map((details) => (
                    <NftBoxTopSellers
                      key={details.id}
                      authorName={details.authorName}
                      authorImage={details.authorImage}
                      authorId={details.authorId}
                      price={details.price}
                    />
                  ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
