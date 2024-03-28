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

function AlbumRock() {
  const [lgShow, setLgShow] = useState(false);
  const [ListRock, setListRock] = useState([]);
  const navigate = useNavigate();

  const getRocks = () => {
    fetch("https://65fbb97314650eb2100a7459.mockapi.io/rock", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
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
          <h1 className="title">ROCK</h1>
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
                {ListRock.map((roc, index) => (
                  <button
                    className="hover-item"
                    onClick={() => navigate(`/rock/${roc.id}`)}
                  >
                    <Col className="vitri" key={index}>
                      <div className="album-item">
                        <img
                          className="album-item-img"
                          alt=""
                          src={roc.avatar}
                        />
                        <div className="album-item-name">{roc.name}</div>
                        <div className="album-item-prices">
                          <div className="album-item-price price-rock">
                            {roc.price}
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

export default AlbumRock;
