import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import logo from './img/logo192.png'

function Home() {
    return (
        <div className='home-container'>
            <div className="carousel-container">
                <div className='carousel-title'>Discounted Products</div>
                <div className='carousel-content'>
                    <Carousel>
                        <Carousel.Item>
                            <img width={300} height={300} src={logo} alt='test' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={300} height={300} src={logo} alt='test' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={300} height={300} src={logo} alt='test' />
                        </Carousel.Item>
                        
                    </Carousel>
                </div>
            </div>

            <div className="carousel-container">
                <div className='carousel-title'>Featured Album</div>
                <div className='carousel-content'>
                    <Carousel>
                        <Carousel.Item>
                            <img width={300} height={300} src={logo} alt='test' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={300} height={300} src={logo} alt='test' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={300} height={300} src={logo} alt='test' />
                        </Carousel.Item>
                        
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Home;