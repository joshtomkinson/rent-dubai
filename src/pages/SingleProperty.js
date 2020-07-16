import React, { Component } from "react";
import defaultBcg from "../properties/large-house.jpg";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { PropertyContext } from "../context";
import StyledHero from "../components/StyledHero";
export default class SingleProperty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = PropertyContext;

  render() {
    const { getProperty } = this.context;
    const property = getProperty(this.state.slug);
    if (!property) {
      return (
        <div className="error">
          <h3>no Property could be found...</h3>
          <Link to="/properties" className="btn-primary">
            Back to properties
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      beach,
      pool,
      images,
    } = property;
    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} `}>
            <Link to="/properties" className="btn-primary">
              back to properties
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-property">
          <div className="single-property-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-property-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>About this property</h3>
              <h6>price per night : £{price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person `}
              </h6>
              <h6>{pool ? "Swimming pool " : null}</h6>
              <h6>{beach && "Private beach"}</h6>
            </article>
          </div>
        </section>
        <section className="property-extras">
          <h6>Features</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
