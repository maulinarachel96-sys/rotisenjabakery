import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

export default function Footer() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <footer className="footer">
            <Container>
                <Row className="footer-content">
                    <Col>
                        <div className="logo">
                            <a href="#"><i className="fa-solid fa-wheat-awn"></i>Roti Senja</a>
                        </div>
                        <p>"Menghadirkan roti berkualitas tinggi yang dibuat dengan cinta untuk keluarga Anda."</p>
                        <p>Any queries: <a href="halo@rotisenja.com">halo@rotisenja.com</a></p>
                    </Col>
                    <Col>
                        <h4>Menu Favorit</h4>
                        <ListGroup>
                            <ListGroup.Item>Roti Tawar Butter</ListGroup.Item>
                            <ListGroup.Item>Almond Croissant</ListGroup.Item>
                            <ListGroup.Item>Focaccia Herbs</ListGroup.Item>
                            <ListGroup.Item>Choco Danish</ListGroup.Item>
                            <ListGroup.Item>Cheese Cake Senja</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h4>Promo</h4>
                        <p>Dapatkan promo diskon member dan info roti harian langsung ke email Anda.</p>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <div className='d-grid'>
                                <button type="submite">Berlangganan</button>
                            </div>
                        </Form>
                    </Col>
                </Row>
                <Row className="fppter-bottom align-items-center">
                    <Col>
                        <p>&copy; All rights reserved</p>
                    </Col>
                    <Col>
                        <ListGroup horizontal className="justify-content-end">
                            <ListGroup.Item>
                                <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <a href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <a href="#"><i className="fa-brands fa-square-youtube"></i></a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}