import React from "react";
import PropertyFilter from "./PropertyFilter";
import PropertyList from "./PropertyList";
import { withPropertyConsumer } from "../context";
import Loading from "./Loading";

function PropertyContainer({ context }) {
  const { loading, sortedProperties, properties } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <PropertyFilter properties={properties} />
      <PropertyList properties={sortedProperties} />
    </>
  );
}

export default withPropertyConsumer(PropertyContainer);
