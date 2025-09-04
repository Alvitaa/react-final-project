import andrea from "../../../assets/Testimonals/andrea.jpg";
import luis from "../../../assets/Testimonals/luis.jpg";
import Maria from "../../../assets/Testimonals/Maria.jpg";
import Ruben from "../../../assets/Testimonals/Ruben.jpg";
import star from "../../../assets/Testimonals/star.svg";

const testimonials = [
  {
    id: 1,
    image: andrea,
    name: 'Andrea Smith',
  },
  {
    id: 2,
    image: luis,
    name: 'Luis Miguel',
  },
  {
    id: 3,
    image: Ruben,
    name: 'Ruben Mark',
  },

  {
    id: 4,
    image: Maria,
    name: 'Maria Ramirez',
  },
];

export default function Testimonials() {
    const testimonialLinks = testimonials.map(({ id, image, name }) => {
    return (
      <div key={id} className='testimonials-map-container'>
        <img src={image} alt={name} className='testimonials-image' />
        <div className='testimonials-stars'>
          <img src={star} alt='ratings' className='testimonials-star' />
          <img src={star} alt='ratings' className='testimonials-star' />
          <img src={star} alt='ratings' className='testimonials-star' />
          <img src={star} alt='ratings' className='testimonials-star' />
          <img src={star} alt='ratings' className='testimonials-star' />
        </div>
        <p className='testimonials-name'>{name}</p>
        <p className='testimonials-description'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          reiciendis. Possimus voluptas perspiciatis nisi eveniet odit
          doloribus.
        </p>
      </div>
    );
  });

  return (
    <section name='testimonials' className='testimonials'>
      <div className='testimonials-header'>
        <h2 className='testimonials-details'>Read from our satisfied customers!</h2>
        <div className='testimonials-background'>
          <div className='testimonials-container'>{testimonialLinks}</div>
        </div>
      </div>
    </section>
  );
}