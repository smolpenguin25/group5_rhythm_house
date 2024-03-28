import "./Home.css";
import "./AlbumSolo.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchName from "./AlbumSoloSearch";

function AlbumSolo() {
  const [ListSolo, setListSolo] = useState([]);
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (searchData) => {
    setSearchResults(searchData);
    setIsSearching(true);
  };

  const getSolos = () => {
    fetch("https://65d55b883f1ab8c63436c62f.mockapi.io/solo", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((Solos) => {
        setListSolo(Solos);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  useEffect(() => {
    getSolos();
  }, []);

  return (
    <div className="home-container">
      <div className="carousel-container">
        <div className="carousel-content"></div>
      </div>
      <div>
        <div>
          <h1 className="title">SOLO</h1>
        </div>

        <Container>
          <Row>
            <Col xs={6} md={4}>
              <div className="album">
                <div className="album-i">ALBUM</div>
                <div className="album-content bg-solo">
                  <Link className="album-content-solo" to="/solo">
                    <span className="bg-solo">SOLO</span>
                  </Link>
                </div>
                <div className="album-content">
                  <Link className="album-content-band" to="/band">
                    BAND
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
                  <SearchName onSearch={handleSearch} />
                  <div className="product-list">
                    {isSearching
                      ? searchResults.map((solo, index) => (
                          <button
                            className="hover-item"
                            onClick={() => navigate(`/solo/${solo.id}`)}
                            key={index}
                          >
                            <Col className="vitri">
                              <div className="album-item">
                                <img
                                  className="album-item-img"
                                  id="album-item-fix"
                                  alt=""
                                  src={solo.avatar}
                                />
                                <div className="album-item-name">
                                  {solo.name}
                                </div>
                                <div className="album-item-prices">
                                  <div className="album-item-price">
                                    {solo.price}$
                                  </div>
                                  <div className="album-item-sell">
                                    {solo.sell}$
                                  </div>
                                  <div className="album-item-percent">
                                    {solo.percent}
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </button>
                        ))
                      : ListSolo.map(
                          (solo, index) =>
                            !searchResults.find(
                              (item) => item.id === solo.id
                            ) && (
                              <button
                                className="hover-item"
                                onClick={() => navigate(`/solo/${solo.id}`)}
                                key={index}
                              >
                                <Col className="vitri">
                                  <div className="album-item">
                                    <img
                                      className="album-item-img "
                                      id="album-item-fix"
                                      alt=""
                                      src={solo.avatar}
                                    />
                                    <div className="album-item-name">
                                      {solo.name}
                                    </div>
                                    <div className="album-item-prices">
                                      <div className="album-item-price">
                                        {solo.price}$
                                      </div>
                                      <div className="album-item-sell">
                                        {solo.sell}
                                      </div>
                                      <div className="album-item-percent">
                                        {solo.percent}
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
    </div>
  );
}

export default AlbumSolo;
