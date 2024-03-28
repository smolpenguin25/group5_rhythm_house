import "./Home.css";
import "./AlbumSolo.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchNameBand from "./AlbumBandSearch";
import Footer from "./Footer";

function AlbumBand() {
  const [lgShow, setLgShow] = useState(false);
  const [ListBand, setListBand] = useState([]);
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (searchData) => {
    setSearchResults(searchData);
    setIsSearching(true);
  };

  const getBands = () => {
    fetch("https://65d55b883f1ab8c63436c62f.mockapi.io/band", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((Bands) => {
        setListBand(Bands);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  useEffect(() => {
    getBands();
  }, []);

  return (
    <div className="home-container">
      <div className="carousel-container">
        <div className="carousel-content"></div>
      </div>
      <div>
        <div>
          <h1 className="title">BAND</h1>
        </div>

        <Container>
          <Row>
            <Col xs={6} md={4}>
              <div className="album">
                <div className="album-i">ALBUM</div>
                <div className="album-content bg-solo">
                  <Link className="album-content-solo" to="/solo">
                    SOLO
                  </Link>
                </div>
                <div className="album-content">
                  <Link className="album-content-band" to="/band">
                  <span className="bg-solo">BAND</span>
                  </Link>
                </div>
                <div className="album-content">
                  <Link className="album-content-movie" to="/movie">
                    MOVIE
                  </Link>
                </div>
                <div className="album-content">
                  <Link className="album-content-magazine" to="/magazine">
                    MAGAZINE
                  </Link>
                </div>
                <div className="album-content">
                  <Link className="album-content-rock" to="/rock">
                    ROCK
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <Row className="click-detail">
                <div className="search-test">
                  <SearchNameBand onSearch={handleSearch} />
                  <div className="product-list">
                    {isSearching
                      ? searchResults.map((band, index) => (
                          <button
                            className="hover-item"
                            onClick={() => navigate(`/band/${band.id}`)}
                            key={index}
                          >
                            <Col className="vitri">
                              <div className="album-item">
                                <img
                                  className="album-item-img"
                                  alt=""
                                  src={band.avatar}
                                />
                                <div className="album-item-name">
                                  {band.name}
                                </div>
                                <div className="album-item-prices">
                                  <div className="album-item-price band-maga">
                                    {band.price}$
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </button>
                        ))
                      : ListBand.map(
                          (band, index) =>
                            !searchResults.find(
                              (item) => item.id === band.id
                            ) && (
                              <button
                                className="hover-item"
                                onClick={() => navigate(`/band/${band.id}`)}
                                key={index}
                              >
                                <Col className="vitri">
                                  <div className="album-item">
                                    <img
                                      className="album-item-img"
                                      alt=""
                                      src={band.avatar}
                                    />
                                    <div className="album-item-name">
                                      {band.name}
                                    </div>
                                    <div className="album-item-prices">
                                      <div className="album-item-price band-maga">
                                        {band.price}$
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              </button>
                            )
                        )}
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AlbumBand;
