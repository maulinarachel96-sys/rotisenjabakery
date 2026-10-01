import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const testimonialsData = [
    {
        id: 1,
        image: 'images/fbf.jpg',
        name: 'Rina Wijaya',
        designation: 'Food Blogger',
        description: '"Croissant-nya renyah banget di luar tapi lembut di dalam. Aromanya wangi butter banget, cocok buat teman ngopi sore!"'
    },
    {
        id: 2,
        image: 'images/OIP.webp',
        name: 'Maya Putri',
        designation: 'Ibu Rumah Tangga',
        description: '"Pesan Custom Birthday Cake untuk acara ulang tahun anak kemarin. Hasil dekorasinya persis seperti contoh foto yang saya minta, bolunya lembut dan tidak seret saat dimakan."'
    }
];

export default function Testimonials(){
    return (
        <div className="block testimonials" id="testimonials">
            <Container>
                <Row>
                    <Col className='text-center'>
                        <h2>Apa Kata Penikmat Roti Senja?</h2>
                        <p className="subtitle">Ulasan jujur dari pelanggan setia kami.</p>
                    </Col>
                </Row>
                <Row>
                    {
                        testimonialsData.map(data => 
                            <Col md={6} key={data.id} className='testimonialsColum'>
                                <Card>
                                    <Card.Img variant="top" src={data.image} />
                                    <Card.Body className='text-center'>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Subtitle className="text-muted">{data.designation}</Card.Subtitle>
                                        <Card.Text>
                                            {data.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
}