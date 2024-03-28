import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Detail.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MovieDetail() {
  const [CartList, setCartList] = useOutletContext(); //cart list

  // list solo
  const [ListMovie, setListMovie] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams(); // Lấy id từ URL

  const [movie, setMovie] = useState({}); // State để lưu thông tin của solo

  //add item to cart
  const addToCart = () => {
    setCartList((oldCart) => [...oldCart, movie]);
  };

  const getMovies = () => {
    fetch("https://65fbb97314650eb2100a7459.mockapi.io/movie", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((Movies) => {
        setListMovie(Movies);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  // Hàm để lấy thông tin của solo từ API
  const fetchMovie = () => {
    fetch(`https://65fbb97314650eb2100a7459.mockapi.io/movie/${id}`)
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

                  <pre className="describe-describe">{movie.describe}</pre>
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
              {ListMovie.slice(0, 7).map(
                (mov, index) =>
                  mov.id !== id && (
                    <button className="hover-item" onClick={() => {window.scrollTo(0, 0);navigate(`/movie/${mov.id}`)} } >
                      <div className="album-item " id="related-item">
                        <img className="album-item-img" id="related-img" alt="" src={mov.avatar} />
                        <div className="album-item-name" id="related-name">{mov.name}</div>
                        <div className="album-item-prices" id="related-price">
                          <div className="album-item-price" id="related-price-i">{mov.price}</div>
                          <div className="album-item-sell" id="related-price-i">{mov.sell}</div>
                          <div className="album-item-percent" id="related-price-o"> {mov.percent} </div>
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

export default MovieDetail;
