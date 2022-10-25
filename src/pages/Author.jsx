import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
                    <>
                      <div className="de-flex-col">
                        <div className="profile_avatar">
                          <img src={nft.authorImage} alt="" />

                          <i className="fa fa-check"></i>
                          <div className="profile_name">
                            <h4>
                              {nft.authorName}
                              <span className="profile_username">
                                @{nft.tag}
                              </span>
                              <span id="wallet" className="profile_wallet">
                                {nft.address}
                              </span>
                              <button id="btn_copy" title="Copy Text">
                                Copy
                              </button>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="profile_follow de-flex">
                        <div className="de-flex-col">
                          <div className="profile_follower">
                            {nft.followers} followers
                          </div>
                          <Link to="#" className="btn-main">
                            Follow
                          </Link>
                        </div>
                      </div>
                    </>
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
