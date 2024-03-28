import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import logo from './img/logo192.png';
import { Link } from "react-router-dom";
import Footer from './Footer';

function Home() {
    return (
        <div className='home-container'>
            <div className="carousel-container1">
                <div className='carousel-title'>Discounted Products</div>
                <div className='carousel-content'>
                    <Carousel>
                        <Carousel.Item>
                            <Link to="/solo/1"><img width={400} height={400} src="https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png" alt='test' /></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/solo/2"><img width={400} height={400} src="https://bizweb.dktcdn.net/100/411/628/products/booklet-2-1-1-86f8961a-2c66-4dbe-b979-f0466a7c3083.jpg?v=1677758994023" alt='test' /></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/solo/3"><img width={400} height={400} src="https://i.scdn.co/image/ab67616d0000b273be0ac2aa3ed0047463210db1" alt='test' /></Link>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>

            <div className="carousel-container1">
                <div className='carousel-title'>Featured Album</div>
                <div className='carousel-content'>
                    <Carousel>
                        <Carousel.Item>
                            <Link to="/band/1"><img width={400} height={400} src="https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg" alt='test' /></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/movie/1"><img width={400} height={400} src="https://blob.cede.ch/catalog/18412000/18412411_1_92.jpg?v=1" alt='test' /></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/rock/1"><img width={400} height={400} src="https://upload.wikimedia.org/wikipedia/en/e/ec/Revolver_%28album_cover%29.jpg" alt='test' /></Link>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;