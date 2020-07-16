import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../properties/large-villa.jpg";
import PropTypes from "prop-types";

export default function Property({ property }) {
  const { name, slug, images, price } = property;

  return (
    <article className="property">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="property" />
        <div className="price-top">
          <h6>£{price}</h6>
        </div>
        <Link to={`/properties/${slug}`} className="btn-primary property-link">
          View
        </Link>
      </div>
      <p className="property-info">{name}</p>
    </article>
  );
}

Property.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
