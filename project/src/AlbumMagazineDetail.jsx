import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Detail.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useOutletContext } from "react-router-dom";

function MagazineDetail() {
  const [CartList, setCartList] = useOutletContext(); //cart list

  const { id } = useParams(); // Lấy id từ URL

  const [magazine, setMagazine] = useState({}); // State để lưu thông tin của solo

  const addToCart = () => {
    for (let i = 0; i < CartList.length; i++){
      if(magazine.name === CartList[i].name){
        CartList[i].amount++;
        console.log(CartList[i].amount);
        setCartList(oldCart => [...oldCart]);
        return;
      }
    }
    magazine.amount = 1;
    setCartList(oldCart => [...oldCart, magazine]);
  }

  // Hàm để lấy thông tin của solo từ API
  const fetchMagazine = () => {
    fetch(`https://65f93911df1514524610c6a0.mockapi.io/magazine/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch solo");
      })
      .then((data) => {
        setMagazine(data); // Cập nhật state với thông tin của solo
      })
      .catch((error) => {
        console.error("Error fetching solo:", error);
      });
  };

  //ham sold out

  // Gọi hàm fetchSolo khi component được render
  useEffect(() => {
    fetchMagazine();
  }, [id]); // Khi id thay đổi, component sẽ re-render và gọi lại hàm fetchSolo

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
                {/* Hiển thị ảnh solo */}
                <img src={magazine.avatar} alt={magazine.avatar} />
                <div className="kengang"></div>
              </div>
            </Col>
            <Col xs={6}>
              {/* Hiển thị thông tin chi tiết solo */}
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
                    <div className="album-item-price">{magazine.price}</div>
                    <div className="album-item-sell">{magazine.sell}</div>
                    <div className="album-item-percent">{magazine.percent}</div>
                  </div>
                  <div className="soldout">{magazine.soldout}</div>
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

                  <pre className="describe-describe">{magazine.describe}</pre>
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

export default MagazineDetail;
