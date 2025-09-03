import About from "../About";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import "./Homepage.css";

export default function Homepage() {
    return(
        <>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </>
    );
}