import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Detail.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BandDetail() {
  const [CartList, setCartList] = useOutletContext(); 

  const [ListBand, setListBand] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  const [band, setBand] = useState({});

  const addToCart = () => {
    for (let i = 0; i < CartList.length; i++){
      if(band.name === CartList[i].name){
        CartList[i].amount++;
        console.log(CartList[i].amount);
        setCartList(oldCart => [...oldCart]);
        return;
      }
    }
    band.amount = 1;
    setCartList(oldCart => [...oldCart, band]);
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

  const fetchBand = () => {
    fetch(`https://65d55b883f1ab8c63436c62f.mockapi.io/band/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch band");
      })
      .then((data) => {
        setBand(data);
      })
      .catch((error) => {
        console.error("Error fetching band:", error);
      });
  };

  useEffect(() => {
    fetchBand();
  }, [id]);

  return (
    <div className="container-detail">
      <Container>
        <div className="duongdan">
          <h3>
            Album/{band.type}/{band.name}
          </h3>
        </div>
        <div className="main">
          <Row>
            <Col xs={1} />
            <Col xs={4}>
              <div className="main-left">
                <img src={band.avatar} alt={band.avatar} />
                <div className="kengang"></div>
                <div className="playlist">
                  <div className="playlist-bg">
                    <div className="playlist-nav">
                      <div className="playlist-avatar">
                        {" "}
                        <br />
                        <img src={band.avatar} alt={band.avatar} />
                      </div>
                      <div className="playlist-nav-i">
                        {" "}
                        <br />
                        <div>
                          <b className="playlist-name">{band.songname}</b>
                        </div>{" "}
                        <br />
                        <div className="playlist-i">Playlist</div>
                      </div>
                    </div>
                    <div className="playlist-list">
                      <pre>{band.songlist}</pre> <br />
                      <pre>{band.songtime}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="detail-info">
                <div className="detail-info-name">{band.name}</div>
                <div className="detail-info-purch">
                  <div>
                    <div className="start">
                      {band.start}{" "}
                      <img src={band.startimg} alt={band.startimg} />
                      <img src={band.startimg} alt={band.startimg} />
                      <img src={band.startimg} alt={band.startimg} />
                      <img src={band.startimg} alt={band.startimg} />
                      <img src={band.startimg} alt={band.startimg} />
                    </div>
                  </div>
                  <div className="kedoc"></div>
                  <div>{band.ratings} ratings</div>
                  <div className="kedoc"></div>
                  <div>{band.bipmonth}+ bought in past month</div>
                </div>

                <div>
                  <div className="detail-price">
                    <div className="album-item-price">{band.price}$</div>
                  </div>
                  <div className="soldout">{band.soldout}</div>
                </div>

                <div className="add">
                  <div>
                    <Button variant="outline-success" className="addtocart" onClick={addToCart}>
                      Add to Cart
                    </Button>
                  </div>
                  <div className="kc">
                    <Button variant="outline-warning" className="buynow">
                      Buy Now
                    </Button>
                  </div>
                </div>
                <div className="kengang"></div>
                <div>
                  <br />
                  <h3 className="describe">Describe:</h3>

                  <pre className="describe-describe">{band.describe}</pre>
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
              {ListBand.slice(0, 7).map(
                (ban, index) =>
                  ban.id !== id && (
                    <button className="hover-item" onClick={() => {window.scrollTo(0, 0);navigate(`/band/${ban.id}`)} } >
                      <div className="album-item " id="related-item">
                        <img className="album-item-img" id="related-img" alt="" src={ban.avatar} />
                        <div className="album-item-name" id="related-name">{ban.name}</div>
                        <div className="album-item-prices" id="related-price">
                          <div className="album-item-price" id="related-price-i">{ban.price}$</div>
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

export default BandDetail;
