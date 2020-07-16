import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import PropertyContainer from "../components/PropertyContainer";
const Properties = () => {
  return (
    <>
      <Hero hero="propertyHero">
        <Banner title="Properties">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </Banner>
      </Hero>
      <PropertyContainer />
    </>
  );
};

export default Properties;
