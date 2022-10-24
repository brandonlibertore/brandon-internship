import React, { useState, useEffect } from "react";
import axios from "axios";
import NftBoxNewItems from "../UI/NftBoxNewItems";
import SkeletonNewItems from "../UI/SkeletonNewItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewItems = () => {
  const [loading, setLoading] = useState(false);
  const [nft, setNft] = useState([]);

  async function fetchNft() {
    setLoading(true);
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
    );
    setNft(data);
    setLoading(false);
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
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...settings}>
            {loading
              ? new Array(6)
                  .fill(0)
                  .map((_, index) => <SkeletonNewItems key={index} />)
              : nft.map((details) => (
                  <NftBoxNewItems
                    key={details.id}
                    authorImage={details.authorImage}
                    nftImage={details.nftImage}
                    title={details.title}
                    price={details.price}
                    likes={details.likes}
                    expiryDate={details.expiryDate}
                  />
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
