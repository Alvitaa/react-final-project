import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/nav-logo.png";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import "./Navbar.css";

const links = [
    {
        id: 1,
        link: "about",
        name: "ABOUT",
    },
    {
        id: 2,
        link: "menu",
        name: "MENU",
    },
    {
        id: 3,
        link: "reservation",
        name: "RESERVATION",
    },
    {
        id: 4,
        link: "order",
        name: "ORDER ONLINE",
    },
    {
        id: 5,
        link: "login",
        name: "LOGIN",
    },
];

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    function handleToggle() {
        setNavbarOpen(!navbarOpen);
    }

    const navLinks = links.map(({ link, id, name }) => {
        return (
            <li key={id}>
                <Link to={link} onClick={handleToggle}>
                    {name}
                </Link>
            </li>
        );
    });

    return (
        <header>
            <nav>
                <Link to={"/"}>
                    <img src={logo} alt="Little Lemon Logo" />
                </Link>
                <ul className="nav-links">{navLinks}</ul>
                <button className="nav-button" onClick={handleToggle}>
                    {navbarOpen ? (
                        <CgClose size="1.5rem" />
                    ) : (
                        <FaBars size="1.5rem" />
                    )}
                </button>
            </nav>
            {navbarOpen && (
                <ul className="nav-menu">
                    {navLinks}
                </ul>
            )}
        </header>
    );
}
