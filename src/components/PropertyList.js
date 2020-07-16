import React from "react";
import Property from "./Property";
export default function PropertyList({ properties }) {
  if (properties.length === 0) {
    return (
      <div className="empty-search">
        <h3>No properties matched your search</h3>
      </div>
    );
  }
  return (
    <section className="propertylist">
      <div className="propertylist-center">
        {properties.map((item) => {
          return <Property key={item.id} property={item} />;
        })}
      </div>
    </section>
  );
}
