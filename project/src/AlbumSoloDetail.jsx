import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Detail.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SoloDetail() {
  const [CartList, setCartList] = useOutletContext();

  const [ListSolo, setListSolo] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  const [solo, setSolo] = useState({});

  const addToCart = () => {
    setCartList(oldCart => [...oldCart, solo]);
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

  const fetchSolo = () => {
    fetch(`https://65d55b883f1ab8c63436c62f.mockapi.io/solo/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch solo");
      })
      .then((data) => {
        setSolo(data);
      })
      .catch((error) => {
        console.error("Error fetching solo:", error);
      });
  };

  useEffect(() => {
    fetchSolo();
  }, [id]); 

  return (
    <div className="container-detail">
      <Container>
        <div className="duongdan">
          <h3>
            Album/{solo.type}/{solo.name}
          </h3>
        </div>
        <div className="main">
          <Row>
            <Col xs={1} />
            <Col xs={4}>
              <div className="main-left">
                <img src={solo.avatar} alt={solo.avatar} />
                <div className="kengang"></div>
                <div className="playlist">
                  <div className="playlist-bg">
                    <div className="playlist-nav">
                      <div className="playlist-avatar">
                        {" "}
                        <br />
                        <img src={solo.avatar} alt={solo.avatar} />
                      </div>
                      <div className="playlist-nav-i">
                        {" "}
                        <br />
                        <div>
                          <b className="playlist-name">{solo.songname}</b>
                        </div>{" "}
                        <br />
                        <div className="playlist-i">Playlist</div>
                      </div>
                    </div>
                    <div className="playlist-list">
                      <pre>{solo.songlist}</pre> <br />
                      <pre>{solo.songtime}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="detail-info">
                <div className="detail-info-name">{solo.name}</div>
                <div className="detail-info-purch">
                  <div>
                    <div className="start">
                      {solo.start}{" "}
                      <img src={solo.startimg} alt={solo.startimg} />
                      <img src={solo.startimg} alt={solo.startimg} />
                      <img src={solo.startimg} alt={solo.startimg} />
                      <img src={solo.startimg} alt={solo.startimg} />
                      <img src={solo.startimg} alt={solo.startimg} />
                    </div>
                  </div>
                  <div className="kedoc"></div>
                  <div>{solo.ratings} ratings</div>
                  <div className="kedoc"></div>
                  <div>{solo.bipmonth}+ bought in past month</div>
                </div>

                <div>
                  <div className="detail-price">
                    <div className="album-item-price">{solo.price}$</div>
                    <div className="album-item-sell">{solo.sell}</div>
                    <div className="album-item-percent">{solo.percent}</div>
                  </div>
                  <div className="soldout">{solo.soldout}</div>
                </div>

                <div className="add">
                  <div>
                    <Button variant="outline-success" className="addtocart" onClick={addToCart} >
                      <b>Add to Cart</b>
                    </Button>
                  </div>
                  <div className="kc">
                    <Button variant="outline-warning" className="buynow">
                      <b>Buy Now</b>
                    </Button>
                  </div>
                </div>
                <div className="kengang"></div>
                <div>
                  <br />
                  <h3 className="describe">Describe:</h3>

                  <pre className="describe-describe">{solo.describe}</pre>
                </div>
              </div>
            </Col>
            <Col xs={1} />
          </Row>
        </div>
        <div className="main">
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              <h3 className="related-title">RELATED PRODUCTS</h3>
            </Col>

            <Col xs={1} />
          </Row>
        </div>
        <div className="main">
          <Row>
            <Col xs={1} />
            <Col xs={10} className="related-kc">
              {ListSolo.slice(0, 7).map(
                (sol, index) =>
                  sol.id !== id && (
                    <button className="hover-item" onClick={() => {window.scrollTo(0, 0);navigate(`/solo/${sol.id}`)} } >
                      <div className="album-item " id="related-item">
                        <img className="album-item-img" id="related-img" alt="" src={sol.avatar} />
                        <div className="album-item-name" id="related-name">{sol.name}</div>
                        <div className="album-item-prices" id="related-price">
                          <div className="album-item-price" id="related-price-i">{sol.price}$</div>
                          <div className="album-item-sell" id="related-price-i">{sol.sell}</div>
                          <div className="album-item-percent" id="related-price-o"> {sol.percent} </div>
                        </div>
                      </div>
                    </button>
                  )
              )}
            </Col>

            <Col xs={1} />
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default SoloDetail;
