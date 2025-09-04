import { useEffect, useState } from "react";
import "./Reservation.css";
import { submitAPI } from "../../../utils/temp";
import { useNavigate } from "react-router-dom";
import Photo from "../../../assets/Form.jpg";

const BookingForm = ({ availableTimes, dispatch }) => {
    const navigate = useNavigate();
    const { times } = availableTimes;
    const [bookings, setBookings] = useState({
        date: "",
        time: "16:00",
        guests: "",
        occasion: "Birthday",
    });

    useEffect(() => {
        localStorage.setItem("Bookings", JSON.stringify(bookings));
    }, [bookings]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ((bookings.date, bookings.time, bookings.guests !== "")) {
            submitAPI();

            setBookings({
                date: bookings.date,
                time: bookings.time,
                guests: bookings.guests,
                occasion: bookings.occasion,
            });

            navigate("/reservation/confirmed");
        } else {
            console.log("THERE IS AN ERROR SUBMITTING YOUR FORM");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // [e.target.name] = e.target.time || e.target.guests || e.target.occasion
        setBookings({ ...bookings, [name]: value });
    };

    return (
        <section name="reservations" className="booking-form">
            <div className="bookings-container">
                <h1 className="booking-title">Find a Table for any occasion</h1>
                <form
                    className="form-container"
                    onSubmit={handleSubmit}
                    aria-label="On Submit"
                >
                    <label htmlFor="res-date">Date: </label>
                    <input
                        type="date"
                        name="date"
                        id="res-date"
                        value={bookings.date}
                        aria-label="On Change"
                        onChange={(e) => {
                            setBookings({ ...bookings, date: e.target.value });
                            // new Date (e.target.value),  date argument on fetchAPI function can access .getDate() and set availableTimes different based on a given Date
                            dispatch({
                                type: "UPDATE_TIMES",
                                date: new Date(e.target.value),
                            });
                        }}
                        required={true}
                    />

                    <label htmlFor="res-time">Time:</label>
                    <select
                        id="res-time"
                        name="time"
                        value={bookings.time}
                        onChange={handleChange}
                        aria-label="On Change"
                        required={true}
                    >
                        {times.map((time) => (
                            <option key={time}>{time}</option>
                        ))}
                    </select>

                    <label htmlFor="guests">Number of Guests:</label>
                    <input
                        type="number"
                        placeholder="1-20"
                        min="1"
                        max="20"
                        id="guests"
                        name="guests"
                        value={bookings.guests}
                        onChange={handleChange}
                        aria-label="On Change"
                        required={true}
                    />

                    <label htmlFor="occasion">Occasion:</label>
                    <select
                        id="occasion"
                        value={bookings.occasion}
                        name="occasion"
                        onChange={handleChange}
                        aria-label="On Change"
                        required={true}
                    >
                        <option>Birthday</option>
                        <option>Engagement</option>
                        <option>Anniversary</option>
                        <option>Wedding</option>
                    </select>

                    <button type="submit" className="booking-button">
                        Make Your reservation
                    </button>
                </form>
            </div>
            <img src={Photo} alt="plate" />
        </section>
    );
};

export default BookingForm;
