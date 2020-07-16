import React, { Component } from "react";
import items from "./data";

const PropertyContext = React.createContext();

class PropertyProvider extends Component {
  state = {
    properties: [],
    sortedProperties: [],
    featuredProperties: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    pool: false,
    beach: false,
  }

  componentDidMount() {
    // this.getData();
    let properties = this.formatData(items);
    let featuredProperties = properties.filter(
      (house) => house.featured === true
    );
    let maxPrice = Math.max(...properties.map((item) => item.price));
    let maxSize = Math.max(...properties.map((item) => item.size));
    this.setState({
      properties,
      featuredProperties,
      sortedProperties: properties,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let property = { ...item.fields, images, id };
      return property;
    });
    return tempItems;
  }
  getProperty = (slug) => {
    let tempProperties = [...this.state.properties];
    const property = tempProperties.find((house) => house.slug === slug);
    return property;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterProperties
    );
  };
  filterProperties = () => {
    let {
      properties,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      pool,
      beach,
      
    } = this.state;
   
    let tempProperties = [...properties];


    capacity = parseInt(capacity);

   
    price = parseInt(price)

    // filter by type
    if (type !== "all") {
      tempProperties = tempProperties.filter((house) => house.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempProperties = tempProperties.filter(
        (house) => house.capacity >= capacity
      );
    }
    // filter by price
    tempProperties = tempProperties.filter((house) => house.price <= price);
    // filter by size
    tempProperties = tempProperties.filter(
      (house) => house.size >= minSize && house.size <= maxSize
    );
    // filter by pool
    if (pool) {
      tempProperties = tempProperties.filter((house) => house.pool === true);
    }
    // filter by beach
    if (beach) {
      tempProperties = tempProperties.filter((house) => house.beach === true);
    }
    





     
    // change state
    this.setState({
      sortedProperties: tempProperties,
      price:price
    });
  };
  render() {
    return (
      <PropertyContext.Provider
        value={{
          ...this.state,
          getProperty: this.getProperty,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </PropertyContext.Provider>
    );
  }
}

const PropertyConsumer = PropertyContext.Consumer;

export function withPropertyConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <PropertyConsumer>
        {(value) => <Component {...props} context={value} />}
      </PropertyConsumer>
    );
  };
}

export { PropertyProvider, PropertyConsumer, PropertyContext };
