import "./Home.css";
import "./AlbumSolo.css";
// import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import search from "./img/searchicon.png";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { Link, Navigate } from "react-router-dom";

function AlbumSolo({ id }) {
  // const navigate = useNavigate();

  const [lgShow, setLgShow] = useState(false);

  const [ListSolo, setListSolo] = useState([]);

  const navigate = useNavigate();

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
        //console.log("Student List: " + studentList);
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
          <h1 className="title">SOLO</h1>
        </div>
        <div className="sear">
          <Button onClick={() => setLgShow(true)}>
            <img width={20} src={search} alt="sear" />
          </Button>
        </div>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={6} md={4}>
              <div className="album">
                <div className="album-i">ALBUM</div>
                <div className="album-content">
                  <Link
                    className="album-content-solo bg-solo"
                    element={<AlbumSolo />}
                    to=""
                  >
                    SOLO
                  </Link>
                </div>
                <div className="album-content">
                  <Link
                    className="album-content-band"
                    path="solo"
                    href="#/band"
                    to=""
                  >
                    BAND
                  </Link>
                </div>
                <div className="album-content">
                  <Link className="album-content-movie" href="#/movie" to="">
                    MOVIE
                  </Link>
                </div>
                <div className="album-content">
                  <Link
                    className="album-content-magazine"
                    href="#/magazine"
                    to=""
                  >
                    MAGAZINE
                  </Link>
                </div>
              </div>
            </Col>

            {/* item */}
            <Col xs={12} md={8}>
              <Row>
                {ListSolo.map((sol, index) => (
                  <Col key={index}>
                    <div className="album-item">
                      <button onClick={() => navigate(`/Solos/${id}`)}>
                        <img
                          className="album-item-img"
                          alt=""
                          src={sol.avatar}
                        />
                      </button>
                      <button onClick={() => navigate(`/Solos/${id}`)}>
                        <div className="album-item-name">{sol.name}</div>
                      </button>
                      <div className="album-item-prices">
                        <div className="album-item-price">{sol.price}</div>
                        <div className="album-item-sell">{sol.sell}</div>
                        <div className="album-item-percent">{sol.percent}</div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AlbumSolo;
