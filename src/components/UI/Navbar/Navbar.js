import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../assets/img/logo.svg';
import { Link } from 'react-scroll';
import classes from './Navbar.module.css';

const NavList = (props) => {
    return (
        <ul className={classes.Navbar__menu__list}>
            <li className={classes.Navbar__menu__list__item}>
                <Link activeClass='active' to="product" spy={true} smooth={true} onClick={props.clickHandler}>Product</Link>
            </li>
            <li className={classes.Navbar__menu__list__item}>
                <Link to="bike-type" spy={true} smooth={true} onClick={props.clickHandler}>Bike Type</Link>
            </li>
            <li className={classes.Navbar__menu__list__item}>
                <Link to="about" spy={true} smooth={true} onClick={props.clickHandler}>About Us</Link>
            </li>
            <li className={classes.Navbar__menu__list__item}>
                <Link to="testimonials" spy={true} smooth={true} onClick={props.clickHandler}>Testimonials</Link>
            </li>
            <li className={classes.Navbar__menu__list__item}>
                <Link to="contact" spy={true} smooth={true} onClick={props.clickHandler}>Contact</Link>
            </li>
        </ul>
    )
}

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen, () => {
            document.addEventListener('click', toggleMenu);
        });
    }

    return (
        <header>
            <nav className={classes.Navbar}>
                <div className={classes.Navbar__logo}>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className={classes.Navbar__menu}>
                    <div className={classes.Navbar__menu__icon} onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <NavList />
                </div>
            </nav>
            {isOpen && <span className={classes.Navbar__menu__overlay} onClick={toggleMenu}>
                <span className={classes.Navbar__menu}>
                    <div className={classes.Navbar__menu__container}>
                        <NavList clickHandler={toggleMenu} />
                    </div>
                </span>
            </span>}
        </header>
    );
}

export default Navbar;