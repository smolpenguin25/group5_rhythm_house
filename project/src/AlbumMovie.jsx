import "./Home.css";
import "./AlbumSolo.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchNameMovie from "./AlbumMovieSearch";

function AlbumMovie() {
  const [lgShow, setLgShow] = useState(false);
  const [ListMovie, setListMovie] = useState([]);
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (searchData) => {
    setSearchResults(searchData);
    setIsSearching(true);
  };

  const getMovies = () => {
    fetch("https://65fbb97314650eb2100a7459.mockapi.io/movie", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((Movies) => {
        setListMovie(Movies);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="home-container">
      <div className="carousel-container">
        <div className="carousel-content"></div>
      </div>
      <div>
        <div>
          <h1 className="title">MOVIE</h1>
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
                  <span className="bg-solo">MOVIE</span>
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
                  <SearchNameMovie onSearch={handleSearch} />
                  <div className="product-list">
                    {isSearching
                      ? searchResults.map((movie, index) => (
                          <button
                            className="hover-item"
                            onClick={() => navigate(`/movie/${movie.id}`)}
                            key={index}
                          >
                            <Col className="vitri">
                              <div className="album-item">
                                <img
                                  className="album-item-img"
                                  id="album-item-fix"
                                  alt=""
                                  src={movie.avatar}
                                />
                                <div className="album-item-name">
                                  {movie.name}
                                </div>
                                <div className="album-item-prices">
                                  <div className="album-item-price">
                                    {movie.price}$
                                  </div>
                                  <div className="album-item-sell">
                                    {movie.sell}
                                  </div>
                                  <div className="album-item-percent">
                                    {movie.percent}
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </button>
                        ))
                      : ListMovie.map(
                          (movie, index) =>
                            !searchResults.find(
                              (item) => item.id === movie.id
                            ) && (
                              <button
                                className="hover-item"
                                onClick={() => navigate(`/movie/${movie.id}`)}
                                key={index}
                              >
                                <Col className="vitri">
                                  <div className="album-item">
                                    <img
                                      className="album-item-img"
                                      id="album-item-fix"
                                      alt=""
                                      src={movie.avatar}
                                    />
                                    <div className="album-item-name">
                                      {movie.name}
                                    </div>
                                    <div className="album-item-prices">
                                      <div className="album-item-price">
                                        {movie.price}$
                                      </div>
                                      <div className="album-item-sell">
                                        {movie.sell}
                                      </div>
                                      <div className="album-item-percent">
                                        {movie.percent}
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

export default AlbumMovie;
