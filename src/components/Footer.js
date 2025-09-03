import { Link } from "react-router-dom";
import logo from "../assets/Asset 20@4x.png"

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

export default function Footer() {
    const footerLinks = links.map(({ link, id, name }) => {
        return (
            <li key={id}>
                <Link to={link}>
                    {name}
                </Link>
            </li>
        );
    });

    return(
        <footer>
            <div>
                <img src={logo} alt="Little Lemon Logo"/>
            </div>
            <div>
                <h4>Navigation</h4>
                <ul>{footerLinks}</ul>
            </div>
            <div>
                <h4>Contact Information</h4>
                <ul>
                    <li>Chicago</li>
                    <li>(111) 222-3333</li>
                    <li>contact@littlelemon.com</li>
                </ul>
            </div>
            <div>
                <h4>Social Media</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </footer>
    );
}