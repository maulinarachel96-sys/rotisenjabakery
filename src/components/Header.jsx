import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = document.getElementById("header").offsetHeight;
            setIsSticky (window.scrollY > headerHeight);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (event, targetId) => {
        event.preventDefault();

        const target = document.querySelector(targetId);

        if (target) {
            const navbar = document.querySelector(".navbar");
            const navbarHeight = navbar?.offsetHeight || 0;
            const offsetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };
    
    return (
        <header>
            <div className="header" id="header">
                <Container>
                    <div className="holder">
                        <div className="logo">
                            <a href="#"><i className="fa-solid fa-wheat-awn"></i>Roti Senja</a>
                        </div>
                        <div className="contactInfo">
                            <ul>
                                <li>
                                    <a href="tell:+62 812-3456-7890"><i className="fa-solid fa-mobile-screen-button"></i> <span>+62 812-3456-7890</span></a>
                                </li>
                                <li>
                                    <a href="mailto:halo@rotisenja.com"><i className="fa-regular fa-envelope"></i> <span>halo@rotisenja.com</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className={isSticky ? "fixed-top" : ""}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={(e) =>handleNavClick(e, "#header")}>Home</Nav.Link>
                            <Nav.Link onClick={(e) =>handleNavClick(e, "#services")}>MENU / PRODUK</Nav.Link>
                            <Nav.Link onClick={(e) =>handleNavClick(e, "#about")}>About</Nav.Link>
                            <Nav.Link onClick={(e) =>handleNavClick(e, "#why-choose-us")}>KEUNGGULAN</Nav.Link>
                            <Nav.Link onClick={(e) =>handleNavClick(e, "#testimonials")}>ULASAN</Nav.Link>
                            <Nav.Link onClick={(e) =>handleNavClick(e, "#contact-us")}>KONTAK & LOKASI</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        </header>
    )
}