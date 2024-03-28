import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Detail.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { useOutletContext } from "react-router-dom";
import Form from "react-bootstrap/Form";

// ll
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
  const [CartList, setCartList] = useOutletContext(); //cart list

  const { id } = useParams(); // Lấy id từ URL

  const [rock, setRock] = useState({}); // State để lưu thông tin của solo

  const addToCart = () => {
    for (let i = 0; i < CartList.length; i++){
      if(rock.name === CartList[i].name){
        CartList[i].amount++;
        console.log(CartList[i].amount);
        setCartList(oldCart => [...oldCart]);
        return;
      }
    }
    rock.amount = 1;
    setCartList(oldCart => [...oldCart, rock]);
  }

  // Hàm để lấy thông tin của solo từ API
  const fetchRock = () => {
    fetch(`https://65fbb97314650eb2100a7459.mockapi.io/rock/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch solo");
      })
      .then((data) => {
        setRock(data); // Cập nhật state với thông tin của solo
      })
      .catch((error) => {
        console.error("Error fetching solo:", error);
      });
  };

  //ham sold out

  // Gọi hàm fetchSolo khi component được render
  useEffect(() => {
    fetchRock();
  }, [id]); // Khi id thay đổi, component sẽ re-render và gọi lại hàm fetchSolo

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
                {/* Hiển thị ảnh solo */}
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
              {/* Hiển thị thông tin chi tiết solo */}
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
                    <div className="album-item-price price-rock">
                      {rock.price}
                    </div>
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
                              <Button
                                variant="outline-success"
                                className="addtocart"
                                onClick={addToCart}
                              >
                                Send
                              </Button>
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
      </Container>
    </div>
  );
}

export default RockDetail;
