import "./Home.css";
import "./AlbumSolo.css";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import search from "./img/searchicon.png";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AlbumMovie() {
  const [lgShow, setLgShow] = useState(false);
  const [ListMovie, setListMovie] = useState([]);
  const navigate = useNavigate();

  const getMovies = () => {
    fetch("https://65f93911df1514524610c6a0.mockapi.io/movie", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
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
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Body>
            <div className="search-a">
              <input className="search-bar" placeholder="Search" />
              <button className="sear-b">
                <i className="material-icon">
                  <img src={search} alt="" />
                </i>
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div>
        <div>
          <h1 className="title">MOVIE</h1>
        </div>
        <div className="sear">
          <Button onClick={() => setLgShow(true)}>
            <img width={20} src={search} alt="sear" />
          </Button>
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
                {ListMovie.map((mov, index) => (
                  <button
                    className="hover-item"
                    onClick={() => navigate(`/movie/${mov.id}`)}
                  >
                    <Col className="vitri" key={index}>
                      <div className="album-item">
                        <img
                          className="album-item-img"
                          alt=""
                          src={mov.avatar}
                        />
                        <div className="album-item-name">{mov.name}</div>
                        <div className="album-item-prices">
                          <div className="album-item-price">{mov.price}</div>
                          <div className="album-item-sell">{mov.sell}</div>
                          <div className="album-item-percent">
                            {mov.percent}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </button>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AlbumMovie;
