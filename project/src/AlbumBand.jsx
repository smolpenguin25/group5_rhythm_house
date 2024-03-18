import { useNavigate } from "react-router-dom";
import "./Band.css";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import search from "./img/searchicon.png";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AlbumSolo from "./AlbumSolo";
// import { Link } from "react-router-dom";

function Band({ avatar, name, prince, id, sell, percent }) {
  const navigate = useNavigate();
  const [lgShow, setLgShow] = useState(false);

  const [ListBand, setListBand] = useState([]);

  return (
    <div className="home-container">
      <div className="carousel-container">
        <div className="carousel-content"></div>
      </div>
      <div>
        <div className="sear">
          <Button onClick={() => setLgShow(true)}>
            <img width={20} src={search} alt="sear" />
          </Button>
        </div>
        <div>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Search
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div>
        {/* <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button className="search" type="submit">
                <span class="material-symbols-outlined">
                  <img width={20} src={search} alt="sear" />
                </span>
              </Button>
            </Col>
          </Row>
        </Form> */}
        <div>
          <h1>Solo</h1>
        </div>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={6} md={4}>
              <div className="album">
                <div className="album-i">ALBUM</div>
                <div className="album-content">
                  <Link
                    className="album-content-solo"
                    element={<AlbumSolo />}
                    to=""
                  >
                    SOLO
                  </Link>
                </div>
                <div className="album-content">
                  <Link
                    className="album-content-band bg-band"
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
                <Col>
                  <div className="album-item">
                    <img className="album-item-img" alt="" src={avatar} />
                    <div className="album-item-name">{name}</div>
                    <div className="album-item-prices">
                      <div className="album-item-price">{prince}</div>
                      <div className="album-item-sell">{sell}</div>
                      <div className="album-item-percent">{percent}</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Band;
