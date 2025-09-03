import { Link } from "react-router-dom";
import Photo from "../../../assets/MeditarreanPhoto.png";

export default function Hero() {
    return (
        <section className="Hero">
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <h4>
                We are a family owned Mediterranean restaurant, focused on traditional
                recipes served with a modern twist.
                </h4>
                <Link to={"/reservation"} className="reserve-button">
                    Reserve a Table
                </Link>
            </div>
            <img src={Photo} className="hero-photo" alt="food"/>
        </section>
    );
}