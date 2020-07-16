import React from "react";
import { useContext } from "react";
import { PropertyContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function PropertyFilter({ properties }) {
  const context = useContext(PropertyContext);
  const {
    handleChange,
    type,
    capacity,
    
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pool,
    beach,
  } = context;

  let {price} = context
  
  let types = getUnique(properties, "type");

  types = ["all", ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(properties, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Search properties" />
      <form className="filter-form">
        {/*select type  */}
        <div className="form-group">
          <label htmlFor="type">Property type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/*guests   */}
        <div className="form-group">
          <label htmlFor="capacity">Bedrooms</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests  */}
        <div className="form-group">
          <label htmlFor="price"> Price per night £{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price */}
        {/* size */}
        {/* <div className="form-group">
          <label htmlFor="size">Property size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div> */}
        {/* end of size */}
        {/* extras  */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="pool"
              id="pool"
              checked={pool}
              onChange={handleChange}
            />
            <label htmlFor="pool">Swimming pool</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="beach"
              id="beach"
              checked={beach}
              onChange={handleChange}
            />
            <label htmlFor="pets">Beach</label>
          </div>
        </div>
        {/* end of extras  */}
      </form>
    </section>
  );
}
