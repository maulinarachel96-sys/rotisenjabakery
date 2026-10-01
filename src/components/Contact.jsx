import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

export default function Contact() {
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
        <div className="block" id="contact-us">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2>Hubungi Kami</h2>
                        <p className='subtitle'>Get in Touch with Us Today</p>
                    </Col>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-4">
                            <Col>
                                <Form.Control type="text" placeholder="Nama Depan" required />
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Nama Belakang" required />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Form.Control type="email" placeholder="Email" required />
                            </Col>
                            <Col>
                                <Form.Control type="tel" placeholder="Nomor WhatsApp" required />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Form.Control as="textarea" rows={3} placeholder="Pesanan / Pertanyaan(misal: Custom Cake untuk Acara)" required />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Button type="submit">Kirim</Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}