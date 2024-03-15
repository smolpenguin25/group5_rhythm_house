import "./Home.css";
import "./AlbumSolo.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>;

function AlbumSolo() {
  return (
    <div className="home-container">
      <div className="carousel-container">
        <div className="carousel-content"></div>
      </div>
      <div>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button className="search" type="submit">
                <span class="material-symbols-outlined">search</span>
              </Button>
            </Col>
          </Row>
        </Form>
        <div>
          <h1>Solo</h1>
        </div>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={12} md={8}>
              xs=12 md=8
            </Col>
            <Col xs={6} md={4}>
              xs=6 md=4
            </Col>
          </Row>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row>
            <Col xs={6} md={4}>
              xs=6 md=4
            </Col>
            <Col xs={6} md={4}>
              xs=6 md=4
            </Col>
            <Col xs={6} md={4}>
              xs=6 md=4
            </Col>
          </Row>

          {/* Columns are always 50% wide, on mobile and desktop */}
          <Row>
            <Col xs={6}>xs=6</Col>
            <Col xs={6}>xs=6</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AlbumSolo;
