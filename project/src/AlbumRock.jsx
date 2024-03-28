import "./Home.css";
import "./AlbumSolo.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchNameRock from "./AlbumRockSearch";

function AlbumRock() {
  const [ListRock, setListRock] = useState([]);
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (searchData) => {
    setSearchResults(searchData);
    setIsSearching(true);
  };

  const getRocks = () => {
    fetch("https://65fbb97314650eb2100a7459.mockapi.io/rock", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((Rocks) => {
        setListRock(Rocks);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  useEffect(() => {
    getRocks();
  }, []);

  return (
    <div className="home-container">
      <div className="carousel-container">
        <div className="carousel-content"></div>
      </div>
      <div>
        <div>
          <h1 className="title">ROCK</h1>
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
                    MAGAZINE
                  </Link>
                </div>
                <div className="album-content">
                  <Link className="album-content-rock" to="/rock">
                    <span className="bg-solo">ROCK</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <Row className="click-detail">
                <div className="search-test">
                  <SearchNameRock onSearch={handleSearch} />
                  <div className="product-list">
                    {isSearching
                      ? searchResults.map((rock, index) => (
                          <button
                            className="hover-item"
                            onClick={() => navigate(`/rock/${rock.id}`)}
                            key={index}
                          >
                            <Col className="vitri">
                              <div className="album-item">
                                <img
                                  className="album-item-img"
                                  id="album-item-fix"
                                  alt=""
                                  src={rock.avatar}
                                />
                                <div className="album-item-name">
                                  {rock.name}
                                </div>
                                <div className="album-item-prices">
                                  <div className="album-item-price">
                                    {rock.pricesold}
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </button>
                        ))
                      : ListRock.map(
                          (rock, index) =>
                            !searchResults.find(
                              (item) => item.id === rock.id
                            ) && (
                              <button
                                className="hover-item"
                                onClick={() => navigate(`/rock/${rock.id}`)}
                                key={index}
                              >
                                <Col className="vitri">
                                  <div className="album-item">
                                    <img
                                      className="album-item-img"
                                      id="album-item-fix"
                                      alt=""
                                      src={rock.avatar}
                                    />
                                    <div className="album-item-name">
                                      {rock.name}
                                    </div>
                                    <div className="album-item-prices">
                                      <div className="album-item-price band-maga">
                                        {rock.pricesold}
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

export default AlbumRock;
