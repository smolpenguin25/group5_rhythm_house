import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Detail.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useOutletContext } from "react-router-dom";

function SoloDetail() {
  const [CartList, setCartList] = useOutletContext(); //cart list

  const { id } = useParams(); // Lấy id từ URL

  const [solo, setSolo] = useState({}); // State để lưu thông tin của solo

  //add item to cart
  const addToCart = () => {
    for (let i = 0; i < CartList.length; i++){
      if(solo.name === CartList[i].name){
        CartList[i].amount++;
        console.log(CartList[i].amount);
        setCartList(oldCart => [...oldCart]);
        return;
      }
    }
    solo.amount = 1;
    setCartList(oldCart => [...oldCart, solo]);
  }

  // Hàm để lấy thông tin của solo từ API
  const fetchSolo = () => {
    fetch(`https://65d55b883f1ab8c63436c62f.mockapi.io/solo/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch solo");
      })
      .then((data) => {
        setSolo(data); // Cập nhật state với thông tin của solo
      })
      .catch((error) => {
        console.error("Error fetching solo:", error);
      });
  };

  //ham sold out

  // Gọi hàm fetchSolo khi component được render
  useEffect(() => {
    fetchSolo();
  }, [id]); // Khi id thay đổi, component sẽ re-render và gọi lại hàm fetchSolo

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
                {/* Hiển thị ảnh solo */}
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
              {/* Hiển thị thông tin chi tiết solo */}
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
                    <div className="album-item-price">{solo.price}</div>
                    <div className="album-item-sell">{solo.sell}</div>
                    <div className="album-item-percent">{solo.percent}</div>
                  </div>
                  <div className="soldout">{solo.soldout}</div>
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

                  <pre className="describe-describe">{solo.describe}</pre>
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

export default SoloDetail;
