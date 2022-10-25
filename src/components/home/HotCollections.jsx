import axios from "axios";
import React, { useState, useEffect } from "react";
import SkeletonHotCollections from "../UI/SkeletonHotCollections";
import NftBox from "../UI/NftBoxHotCollections";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../src/css/styles/HotCollections.css";

const HotCollections = () => {
  const [loading, setLoading] = useState(false);
  const [nft, setNft] = useState([]);

  async function fetchNft() {
    setLoading(true);
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
    );
    setLoading(false);
    setNft(data);
  }

  useEffect(() => {
    fetchNft();
  }, []);

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...settings}>
            {loading
              ? new Array(6)
                  .fill(0)
                  .map((_, index) => <SkeletonHotCollections key={index} />)
              : nft.map((details) => (
                  <NftBox
                    key={details.code}
                    nftImage={details.nftImage}
                    nftId={details.nftId}
                    authorId={details.authorId}
                    authorImage={details.authorImage}
                    title={details.title}
                    code={details.code}
                  />
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
