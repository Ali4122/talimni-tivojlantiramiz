import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';

const NavSec = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let x = ['navbar'];
    if (scrolled) {
        x.push('fixed');
    }

    return (
        <>
            <Navbar className={x.join("")} expand="md">
                <Link to="/" className="navbar-brand">
                    <b>Ta'lim</b>
                </Link>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="/">Bosh Sahifa</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about">Blog</Link>
                        </NavItem>
                        <NavItem>
                            <a href="https://t.me/ALI_4122" target="_blank">Biz bilan bog'lanish</a>
                        </NavItem>
                        {/* <NavItem>
                            <Link to="/">FAQ</Link>
                        </NavItem> */}
                        
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
};



export default NavSec;