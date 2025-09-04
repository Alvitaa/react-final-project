import { useEffect, useState } from "react";
import "./Confirmation.css";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
    const [reservedDetails, setReserveDetails] = useState("");
    const navigate = useNavigate("/");

    useEffect(() => {
        const data = localStorage.getItem("Bookings");
        console.log(data);
        if (data !== null) setReserveDetails(JSON.parse(data));
    }, []);

    return (
        <section name="booking-confirmation" className="booking-confirmation">
            <h1 className="confirmation-confirmed">
                Your reservation is confirmed!
            </h1>
            <div className="confirmation-details-container">
                <h3>
                    Date:{" "}
                    <span className="confirmation-details">
                        {reservedDetails.date}
                    </span>
                </h3>
                <h3>
                    Time:{" "}
                    <span className="confirmation-details">
                        {reservedDetails.time}
                    </span>
                </h3>
                <h3>
                    Guests:{" "}
                    <span className="confirmation-details">
                        {reservedDetails.guests}
                    </span>
                </h3>
                <h3>
                    Ocassion:
                    <span className="confirmation-details">
                        {" "}
                        {reservedDetails.occasion}
                    </span>
                </h3>
            </div>
            <button className="confirmation-home">Go back to Home</button>
        </section>
    );
};

export default Confirmation;
