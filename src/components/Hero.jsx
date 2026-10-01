import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './Hero.css';
import Button from 'react-bootstrap/Button';

var heroData = [
    {
        id: 1,
        image: 'images/roti1.jpeg',
        title: 'Kehangatan & Kelezatan Roti Fresh Setiap Hari'
    },
    {
        id: 2,
        image: 'images/roti2.jpg',
        title: 'Roti Artisan Lezat untuk Momen Spesial Anda'
    },
    {
        id: 3,
        image: 'images/roti3.jpg',
        title: 'Financing options tailored for your growth'
    }
]

export default function Hero() {
    return(
        <div id="hero">
            <Carousel>
                {
                    heroData.map(data => {
                        return (
                            <Carousel.Item key={data.id}>
                                <Image src={data.image} fluid />
                                <Carousel.Caption>
                                    <h3>{data.title}</h3>
                                    <Button variant="primary">Pesan Sekarang</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel> 
        </div>
    )
}