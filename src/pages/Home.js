import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeturedProperties from "../components/FeaturedProperties";
export default function Home() {
  return (
    <>
      <Hero>
        <Banner title=" Rent Luxury Dubai" subtitle="Dubai's #1 high end property rental.">
          <Link to="/properties" className="btn-primary">
            Properties
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeturedProperties />
    </>
  );
}
