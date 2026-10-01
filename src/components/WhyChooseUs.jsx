import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var whyChooseUsData = [
    {
        id: 1,
        title: '100% Bahan Alami', // Fixed typo: tittle -> title
        shortDescription: 'Tanpa pengawet buatan' // Added missing colon
    },
    {
        id: 2,
        title: '500+',
        shortDescription: 'Pelanggan Setia' // Added missing colon
    },
    {
        id: 3,
        title: 'Fresh from the Oven',
        shortDescription: 'Dipanggang setiap hari' // Added missing colon
    },
    {
        id: 4,
        title: 'Sertifikasi',
        shortDescription: 'Halal & Higienis' // Added missing colon
    }
]

export default function WhyChooseUs() {
    return (
        <div className="block why-choose-us" id="why-choose-us">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2>Kenapa Roti Senja?</h2>
                    </Col>
                </Row>
                <Row>
                    {
                        whyChooseUsData.map(data => {
                            return(
                                <Col md={3} key={data.id}>
                                    <h3>{data.title}</h3>
                                    <p>{data.shortDescription}</p>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}