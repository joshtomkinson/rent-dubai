import React, { Component } from "react";
import {
  FaLandmark,
  FaUmbrellaBeach,
  FaPoundSign,
  FaRegCalendarAlt,
} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaLandmark />,
        title: "Close to popular landmarks!",
        info:
          "All of our properties are close to popular landmarks such as the Burj Khalifa and the Dubai mall.",
      },
      {
        icon: <FaPoundSign />,
        title: "High rerturn on investment!",
        info:
          "Our properties are the most cost efficient way to rent a luxury property in Dubai.",
      },
      {
        icon: <FaUmbrellaBeach />,
        title: "Beaches, Beaches... Beaches",
        info:
          "All of our properties are within 2 miles of a beach, so it's no hassle to enjoy the warm Arabian sea.",
      },
      {
        icon: <FaRegCalendarAlt />,
        title: "Reserve now, pay later",
        info:
          "We have a 'buy now.. pay later' scheme.. rent a property, don't pay a penny until 2021.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="About our properties" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
