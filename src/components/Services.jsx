import ListGroup from 'react-bootstrap/ListGroup';

export default function Services() {
    return (
        <div className="services" id="services">
            <ListGroup horizontal>
                <ListGroup.Item action href="#"><i className="fa-solid fa-bread-slice"></i> Roti Tawar & Artisan</ListGroup.Item>
                <ListGroup.Item action href="#"><i className="fa-solid fa-cookie-bite"></i> Croissant & Pastry</ListGroup.Item>
                <ListGroup.Item action href="#"><i className="fa-solid fa-birthday-cake"></i> Kue & Tart</ListGroup.Item>
                <ListGroup.Item action href="#"><i className="fa-solid fa-cookie"></i> Donat & Manisan</ListGroup.Item>
                <ListGroup.Item action href="#"><i className="fa-solid fa-coffee"></i> Kopi & Minuman</ListGroup.Item>
                <ListGroup.Item action href="#"><i className="fa-solid fa-gift"></i> Hampers & Paket Acara</ListGroup.Item>
                <ListGroup.Item action href="#"><i className="fa-solid fa-fire"></i> Menu Spesial Senja</ListGroup.Item>
            </ListGroup>
        </div>
    )
}