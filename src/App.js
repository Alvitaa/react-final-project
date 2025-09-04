import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/pages/Homepage/Homepage";
import About from "./components/pages/About/About";
import Login from "./components/pages/Login";
import Menu from "./components/pages/Menu";
import Reservation from "./components/pages/Reservation/Reservation";
import Order from "./components/pages/Order";
import Confirmation from "./components/pages/Confirmation/Confirmation";

function Main() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/reservation" element={<Reservation />} />
				<Route path="/reservation/confirmed" element={<Confirmation />} />
				<Route path="/order" element={<Order />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</main>
	);
}

function App() {
    return (
        <>
            <Navbar />
            <Main />
            <Footer />
        </>
    );
}

export default App;
