import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';

const clientsData = [
    {
        id: 1,
        logo: 'images/f11.png',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        logo: 'images/f22.png',
        link: 'https://www.google.com'
    },
    {
        id: 3,
        logo: 'images/f33.png',
        link: 'https://www.google.com'
    },
    {
        id: 4,
        logo: 'images/f44.jpg',
        link: 'https://www.google.com'
    },
    {
        id: 5,
        logo: 'images/f55.png',
        link: 'https://www.google.com'
    }
]

export default function Clients() {
    return (
        <div className="clients">
            <Container>
                <Row>
                    {
                        clientsData.map(data =>
                            <Col key={data.id}>
                                <a href={data.link}><Image SRC={data.logo} roundedCircle /></a>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}