import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthorHeader from "../components/UI/AuthorHeader";
import axios from "axios";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import SkeletonAuthor from "../components/UI/SkeletonAuthor";

const Author = () => {
  const [loading, setLoading] = useState(false);
  const [nft, setNft] = useState([]);
  let { id } = useParams();

  async function fetchNft() {
    setLoading(true);
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
    );
    setNft(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchNft();
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  {loading ? (
                    <SkeletonAuthor />
                  ) : (
                    <AuthorHeader
                      key={id}
                      authorImage={nft.authorImage}
                      authorName={nft.authorName}
                      tag={nft.tag}
                      address={nft.address}
                      followers={nft.followers}
                    />
                  )}
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems authorImage={nft.authorImage} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
