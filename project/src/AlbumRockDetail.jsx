import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Detail.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useContext } from "react";
import Alert from "react-bootstrap/Alert";

const PINK = "rgba(255, 192, 203, 0.6)";
const BLUE = "rgba(0, 0, 255, 0.6)";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? PINK : BLUE }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function RockDetail() {
  const [CartList, setCartList] = useOutletContext();

  const [show, setShow] = useState(false);

  const [ListRock, setListRock] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  const [rock, setRock] = useState({});

  const addToCart = () => {
    setCartList((oldCart) => [...oldCart, rock]);
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

  const fetchRock = () => {
    fetch(`https://65fbb97314650eb2100a7459.mockapi.io/rock/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch band");
      })
      .then((data) => {
        setRock(data);
      })
      .catch((error) => {
        console.error("Error fetching band:", error);
      });
  };

  useEffect(() => {
    fetchRock();
  }, [id]);

  return (
    <div className="container-detail">
      <Container>
        <div className="duongdan">
          <h3>
            Album/{rock.type}/{rock.name}
          </h3>
        </div>
        <div className="main">
          <Row>
            <Col xs={1} />
            <Col xs={4}>
              <div className="main-left">
                <img src={rock.avatar} alt={rock.avatar} />
                <div className="kengang"></div>
                <div className="playlist">
                  <div className="playlist-bg">
                    <div className="playlist-nav">
                      <div className="playlist-avatar">
                        {" "}
                        <br />
                        <img src={rock.avatar} alt={rock.avatar} />
                      </div>
                      <div className="playlist-nav-i">
                        {" "}
                        <br />
                        <div>
                          <b className="playlist-name">{rock.songname}</b>
                        </div>{" "}
                        <br />
                        <div className="playlist-i">Playlist</div>
                      </div>
                    </div>
                    <div className="playlist-list">
                      <pre>{rock.songlist}</pre> <br />
                      <pre>{rock.songtime}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="detail-info">
                <div className="detail-info-name">{rock.name}</div>
                <div className="detail-info-purch">
                  <div>
                    <div className="start">
                      {rock.start}{" "}
                      <img src={rock.startimg} alt={rock.startimg} />
                      <img src={rock.startimg} alt={rock.startimg} />
                      <img src={rock.startimg} alt={rock.startimg} />
                      <img src={rock.startimg} alt={rock.startimg} />
                      <img src={rock.startimg} alt={rock.startimg} />
                    </div>
                  </div>
                  <div className="kedoc"></div>
                  <div>{rock.ratings} ratings</div>
                  <div className="kedoc"></div>
                  <div>{rock.bipmonth}+ bought in past month</div>
                </div>

                <div>
                  <div className="detail-price">
                    <div className="album-item-price">{rock.price}$</div>
                  </div>
                  <div className="detail-price">
                    <div className="album-item-price ">{rock.pricesold}</div>
                  </div>
                </div>

                <div className="add">
                  <Accordion defaultActiveKey="0">
                    <Card className="form-order">
                      <Card.Header id="form-order">
                        <ContextAwareToggle eventKey="1">
                          Order
                        </ContextAwareToggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <Form>
                            <Row>
                              <Col>
                                <Form.Control placeholder="First name" />
                              </Col>
                              <Col>
                                <Form.Control placeholder="Last name" />
                              </Col>
                            </Row>
                            <br />
                            <Row>
                              <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control
                                  type="email"
                                  placeholder="Email"
                                />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="tel" placeholder="Phone" />
                              </Form.Group>
                            </Row>
                            <br />
                            <Row>
                              <Form.Group
                                className="mb-3"
                                controlId="formGridAddress1"
                              >
                                <Form.Control placeholder="Address" />
                              </Form.Group>
                            </Row>
                            <Row>
                              <Alert show={show} variant="success">
                                <Alert.Heading>My Alert</Alert.Heading>
                                <p>Congratulations! You have successfully registered.</p>
                                <hr />
                                <div className="d-flex justify-content-end">
                                  <Button
                                    onClick={() => setShow(false)}
                                    variant="outline-success"
                                  >
                                    Close me
                                  </Button>
                                </div>
                              </Alert>

                              {!show && (
                                <Button className="addtocart" onClick={() => setShow(true)}>
                                  Send
                                </Button>
                              )}
                              {/* <Button
                                variant="outline-success"
                                className="addtocart"
                              >
                                Send
                              </Button> */}
                            </Row>
                          </Form>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="kengang"></div>
                <div>
                  <br />
                  <h3 className="describe">Describe:</h3>

                  <pre className="describe-describe">{rock.describe}</pre>
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
              {ListRock.slice(0, 7).map(
                (rock, index) =>
                  rock.id !== id && (
                    <button
                      className="hover-item"
                      onClick={() => {window.scrollTo(0, 0);navigate(`/rock/${rock.id}`)} }
                    >
                      <div className="album-item " id="related-item">
                        <img
                          className="album-item-img"
                          id="related-img"
                          alt=""
                          src={rock.avatar}
                        />
                        <div className="album-item-name" id="related-name">
                          {rock.name}
                        </div>
                        <div className="album-item-prices" id="related-price">
                          <div
                            className="album-item-price"
                            id="related-price-i"
                          >
                            {rock.pricesold}
                          </div>
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

export default RockDetail;
