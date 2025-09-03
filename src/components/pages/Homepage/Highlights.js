import { RiEBike2Line } from "react-icons/ri";
import greekSalad from "../../../assets/greekSalad.jpg";
import bruschetta from "../../../assets/bruschetta.jpg";
import lemonDessert from "../../../assets/lemonDessert.jpg";
import { useNavigate } from "react-router-dom";

const specials = [
    {
        id: 1,
        image: greekSalad,
        name: "Greek Salad",
        price: "$ 12.99",
        description:
            "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        id: 2,
        image: bruschetta,
        name: "Bruschetta",
        price: "$ 5.99",
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.",
    },
    {
        id: 3,
        image: lemonDessert,
        name: "Lemon Dessert",
        price: "$ 5.00",
        description:
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
];

function FoodCard(props) {
    const specialties = specials.map(
        ({ id, image, name, price, description }) => {
            return (
                <div key={id} className="card">
                    <img src={image} alt={name} className="specials-image" />
                    <div className="card-details">
                        <div className="specials-name">
                            <p>{name}</p>
                            <p>{price}</p>
                        </div>
                        <p className="specials-description">{description}</p>
                    </div>
                    <div className="specials-delivery" onClick={props.handleClick}>
                        <p className="specials-name">Order a delivery</p>
                        <RiEBike2Line />
                    </div>
                </div>
            );
        }
    );

    return specialties;
}

export default function Highlights() {
    const navigate = useNavigate("/");

    function goMenu(){
        navigate("/menu");
    };

    function goOrder() {
        navigate("/order");
    }

    return (
        <section>
            <h1>This weeks Specials!</h1>
            <button className="order-button" onClick={goMenu}>Online Menu</button>
            <div className="food-list">
                <FoodCard handleClick={goOrder}/>
            </div>
        </section>
    );
}
