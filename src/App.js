import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Menu from "./components/pages/Menu";
import Reservation from "./components/pages/Reservation";
import Order from "./components/pages/Order";

function Routing() {
	return (
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/reservation" element={<Reservation />} />
				<Route path="/order" element={<Order />} />
				<Route path="/login" element={<Login />} />
			</Routes>
	);
}

function App() {
    return (
        <>
            <Navbar />
            <Routing />
            <Footer />
        </>
    );
}

export default App;
