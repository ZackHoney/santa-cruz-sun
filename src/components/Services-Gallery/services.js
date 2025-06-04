import React from "react";
import { Link } from "react-router-dom";

 const Services = () => {
  return (
    <section className="services-body">
      <h2>Our Services</h2>
    <div className="services-section">
        <div className={'service-item'}>
          <Link to="/decks" onClick={() => window.scrollTo(0, 0)}>
            <div className="service-header" >
              <h3>Decks</h3>
            </div>
          </Link>
        </div>
        <div className={'service-item'}>
          <Link to="/bathroom" onClick={() => window.scrollTo(0, 0)}>
            <div className="service-header" >
              <h3>Bathroom Remodels</h3>
            </div>
          </Link>
          </div>
          <div className={'service-item'}>
          <Link to="/kitchen" onClick={() => window.scrollTo(0, 0)}>
            <div className="service-header" >
              <h3>Kitchen Remodels</h3>
            </div>
          </Link>
        </div>
        <div className={'service-item'}>
          <Link to="/sheSheds" onClick={() => window.scrollTo(0, 0)}>
            <div className="service-header" >
              <h3>She Sheds</h3>
            </div>
          </Link>
        </div>
        <div className={'service-item'}>
          <Link to="/flooring" onClick={() => window.scrollTo(0, 0)}>
            <div className="service-header" >
              <h3>Flooring</h3>
            </div>
          </Link>
        </div><div className={'service-item'}>
          <Link to="/tile" onClick={() => window.scrollTo(0, 0)}>
            <div className="service-header" >
              <h3>Tile</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
