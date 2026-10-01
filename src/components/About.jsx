import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function About() {
    return (
        <div className="block" id="about">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Selamat datang di Roti Senja</h2>
                        <p>"Roti Senja menyajikan berbagai varian roti dan pastry segar yang dipanggang setiap pagi. Kami menggunakan bahan-bahan premium alami tanpa bahan pengawet untuk menghadirkan kehangatan sejati di setiap gigitan."</p>
                        <Button variant="primary">Hubungi Kami</Button>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }} className="margin-top-mobile">
                        <Image src="images/Aroti.jpg" thumbnail />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}