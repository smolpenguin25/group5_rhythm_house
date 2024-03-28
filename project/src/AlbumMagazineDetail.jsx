import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Detail.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function MagazineDetail() {
  const [CartList, setCartList] = useOutletContext();

  const [ListMagazine, setListMagazine] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  const [magazine, setMagazine] = useState({});

  const addToCart = () => {
    for (let i = 0; i < CartList.length; i++) {
      if (magazine.name === CartList[i].name) {
        CartList[i].amount++;
        console.log(CartList[i].amount);
        setCartList(oldCart => [...oldCart]);
        return;
      }
    }
    magazine.amount = 1;
    setCartList(oldCart => [...oldCart, magazine]);
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

  const fetchMagazine = () => {
    fetch(`https://660427482393662c31d0c441.mockapi.io/magazine/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch band");
      })
      .then((data) => {
        setMagazine(data);
      })
      .catch((error) => {
        console.error("Error fetching band:", error);
      });
  };

  useEffect(() => {
    fetchMagazine();
  }, [id]);

  return (
    <div className="container-detail">
      <Container>
        <div className="duongdan">
          <h3>
            Album/{magazine.type}/{magazine.name}
          </h3>
        </div>
        <div className="main">
          <Row>
            <Col xs={1} />
            <Col xs={4}>
              <div className="main-left">
                <img src={magazine.avatar} alt={magazine.avatar} />
                <div className="kengang"></div>

              </div>
            </Col>
            <Col xs={6}>
              <div className="detail-info">
                <div className="detail-info-name">{magazine.name}</div>
                <div className="detail-info-purch">
                  <div>
                    <div className="start">
                      {magazine.start}{" "}
                      <img src={magazine.startimg} alt={magazine.startimg} />
                      <img src={magazine.startimg} alt={magazine.startimg} />
                      <img src={magazine.startimg} alt={magazine.startimg} />
                      <img src={magazine.startimg} alt={magazine.startimg} />
                      <img src={magazine.startimg} alt={magazine.startimg} />
                    </div>
                  </div>
                  <div className="kedoc"></div>
                  <div>{magazine.ratings} ratings</div>
                  <div className="kedoc"></div>
                  <div>{magazine.bipmonth}+ bought in past month</div>
                </div>

                <div>
                  <div className="detail-price">
                    <div className="album-item-price" id="fix-prices">{magazine.price}$</div>
                  </div>
                  <div className="soldout">{magazine.soldout}</div>
                </div>

                <div className="add">
                  <div>
                    <Button variant="outline-success" className="addtocart">
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

                  <pre className="describe-describe">{magazine.describe}</pre>
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
              {ListMagazine.slice(0, 7).map(
                (mag, index) =>
                  mag.id !== id && (
                    <button className="hover-item" onClick={() => { window.scrollTo(0, 0); navigate(`/magazine/${mag.id}`) }} >
                      <div className="album-item " id="related-item">
                        <img className="album-item-img" id="related-img" alt="" src={mag.avatar} />
                        <div className="album-item-name" id="related-name">{mag.name}</div>
                        <div className="album-item-prices" id="related-price">
                          <div className="album-item-price" id="related-price-i">{mag.price}$</div>
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
      <Footer></Footer>
    </div>
  );
}

export default MagazineDetail;
