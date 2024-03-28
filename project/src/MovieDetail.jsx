import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Detail.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function MovieDetail() {
  const { id } = useParams(); // Lấy id từ URL

  const [movie, setMovie] = useState({}); // State để lưu thông tin của solo

  // Hàm để lấy thông tin của solo từ API
  const fetchMovie = () => {
    fetch(`https://65f93911df1514524610c6a0.mockapi.io/movie/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch solo");
      })
      .then((data) => {
        setMovie(data); // Cập nhật state với thông tin của solo
      })
      .catch((error) => {
        console.error("Error fetching solo:", error);
      });
  };

  //ham sold out

  // Gọi hàm fetchSolo khi component được render
  useEffect(() => {
    fetchMovie();
  }, [id]); // Khi id thay đổi, component sẽ re-render và gọi lại hàm fetchSolo

  return (
    <div className="container-detail">
      <Container>
        <div className="duongdan">
          <h3>
            Album/{movie.type}/{movie.name}
          </h3>
        </div>
        <div className="main">
          <Row>
            <Col xs={1} />
            <Col xs={4}>
              <div className="main-left">
                {/* Hiển thị ảnh solo */}
                <img src={movie.avatar} alt={movie.avatar} />
                <div className="kengang"></div>
                <div className="playlist">
                  <div className="playlist-bg">
                    <div className="playlist-nav">
                      <div className="playlist-avatar">
                        {" "}
                        <br />
                        <img src={movie.avatar} alt={movie.avatar} />
                      </div>
                      <div className="playlist-nav-i">
                        {" "}
                        <br />
                        <div>
                          <b className="playlist-name">{movie.songname}</b>
                        </div>{" "}
                        <br />
                        <div className="playlist-i">Playlist</div>
                      </div>
                    </div>
                    <div className="playlist-list">
                      <pre>{movie.songlist}</pre> <br />
                      <pre>{movie.songtime}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              {/* Hiển thị thông tin chi tiết solo */}
              <div className="detail-info">
                <div className="detail-info-name">{movie.name}</div>
                <div className="detail-info-purch">
                  <div>
                    <div className="start">
                      {movie.start}{" "}
                      <img src={movie.startimg} alt={movie.startimg} />
                      <img src={movie.startimg} alt={movie.startimg} />
                      <img src={movie.startimg} alt={movie.startimg} />
                      <img src={movie.startimg} alt={movie.startimg} />
                      <img src={movie.startimg} alt={movie.startimg} />
                    </div>
                  </div>
                  <div className="kedoc"></div>
                  <div>{movie.ratings} ratings</div>
                  <div className="kedoc"></div>
                  <div>{movie.bipmonth}+ bought in past month</div>
                </div>

                <div>
                  <div className="detail-price">
                    <div className="album-item-price">{movie.price}</div>
                    <div className="album-item-sell">{movie.sell}</div>
                    <div className="album-item-percent">{movie.percent}</div>
                  </div>
                  <div className="soldout">{movie.soldout}</div>
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

                  <pre className="describe-describe">{movie.describe}</pre>
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

export default MovieDetail;
