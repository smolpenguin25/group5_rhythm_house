import "./Home.css";
import "./AlbumSolo.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchNameMagazine from "./AlbumMagazineSearch";
import Footer from "./Footer";

function AlbumMagazine() {
  const [lgShow, setLgShow] = useState(false);
  const [ListMagazine, setListMagazine] = useState([]);
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (searchData) => {
    setSearchResults(searchData);
    setIsSearching(true);
  };

  const getMagazines = () => {
    fetch("https://660427482393662c31d0c441.mockapi.io/magazine", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((Magazines) => {
        setListMagazine(Magazines);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  useEffect(() => {
    getMagazines();
  }, []);

  return (
    <div className="home-container">
      <div className="carousel-container">
        <div className="carousel-content"></div>
      </div>
      <div>
        <div>
          <h1 className="title">MAGAZINE</h1>
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
                  <span className="bg-solo">MAGAZINE</span>
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
                  <SearchNameMagazine onSearch={handleSearch} />
                  <div className="product-list">
                    {isSearching
                      ? searchResults.map((magazine, index) => (
                          <button
                            className="hover-item"
                            onClick={() => navigate(`/magazine/${magazine.id}`)}
                            key={index}
                          >
                            <Col className="vitri">
                              <div className="album-item">
                                <img
                                  className="album-item-img"
                                  alt=""
                                  src={magazine.avatar}
                                />
                                <div className="album-item-name">
                                  {magazine.name}
                                </div>
                                <div className="album-item-prices">
                                  <div className="album-item-price band-maga">
                                    {magazine.price}$
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </button>
                        ))
                      : ListMagazine.map(
                          (magazine, index) =>
                            !searchResults.find(
                              (item) => item.id === magazine.id
                            ) && (
                              <button
                                className="hover-item"
                                onClick={() => navigate(`/magazine/${magazine.id}`)}
                                key={index}
                              >
                                <Col className="vitri">
                                  <div className="album-item">
                                    <img
                                      className="album-item-img"
                                      alt=""
                                      src={magazine.avatar}
                                    />
                                    <div className="album-item-name">
                                      {magazine.name}
                                    </div>
                                    <div className="album-item-prices">
                                      <div className="album-item-price band-maga">
                                        {magazine.price}$
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

export default AlbumMagazine;
