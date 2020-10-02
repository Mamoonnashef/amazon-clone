import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB406828640_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="Beats Pill+ רמקול אלחוטי נייד - בלוטות' סטריאו, 12 שעות של זמן האזנה, מיקרופון לשיחות טלפון - שחור"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51KkX2nSNSL._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id={2}
            title="Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones - Apple H1 Headphone Chip, Class 1 Bluetooth, Active Noise Cancelling, Transparency, 22 Hours Of Listening Time - Red"
            price={199.95}
            image="https://images-na.ssl-images-amazon.com/images/I/51r34S5b6oL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
