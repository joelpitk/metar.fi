import React from "react";
import MetarCard from "./MetarCard";

const MetarList = ({ airports, onRemove }) => (
  <div style={{ margin: "2px" }}>
    {airports.map(airport => (
      <MetarCard
        key={airport.airportCode}
        airport={airport}
        onRemove={onRemove}
      />
    ))}
  </div>
);

export { MetarList };
