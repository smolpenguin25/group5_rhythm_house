import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Detail.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function BandDetail() {
  const { id } = useParams(); // Lấy id từ URL

  const [band, setBand] = useState({}); // State để lưu thông tin của solo

  // Hàm để lấy thông tin của solo từ API
  const fetchBand = () => {
    fetch(`https://65d55b883f1ab8c63436c62f.mockapi.io/band/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch band");
      })
      .then((data) => {
        setBand(data); // Cập nhật state với thông tin của solo
      })
      .catch((error) => {
        console.error("Error fetching band:", error);
      });
  };

  //ham sold out

  // Gọi hàm fetchSolo khi component được render
  useEffect(() => {
    fetchBand();
  }, [id]); // Khi id thay đổi, component sẽ re-render và gọi lại hàm fetchSolo

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
                {/* Hiển thị ảnh solo */}
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
              {/* Hiển thị thông tin chi tiết solo */}
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
                    <div className="album-item-price">{band.price}</div>
                  </div>
                  <div className="soldout">{band.soldout}</div>
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

                  <pre className="describe-describe">{band.describe}</pre>
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

export default BandDetail;
