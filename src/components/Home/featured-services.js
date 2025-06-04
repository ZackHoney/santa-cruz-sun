import React from "react";
import "../../css/featured-services.css";

const services = [
  {
    title: "Kitchen Remodels",
    description: "Update your kitchen with a custom hood and new cabinets!",
    location: '/kitchen'
  },
  {
    title: "Decks",
    description:
      "BBQ season is here! Let us build an outdoor haven for your family!",
    location: '/decks'
  },
  {
    title: "She-Sheds/Mancaves",
    description: "Let us build a private retreat!",
    location: 'sheSheds'
  },
  {
   title: "Bathroom Remodels",
    description: "Transform your old bathroom into a spa!",
    location: '/bathroom'
  },  
  {
    title: "Flooring",
    description: "New floors will transform any space!",
    location: '/flooring'
  },
  {
    title: "Tile",
    description: 'Update any space with Tile!',
    location: '/tile'
  }
];

const FeaturedServices = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card" onClick={e => window.location.href=`${service.location}`}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;
