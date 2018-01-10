import React from "react";
import MetarCard from "./MetarCard"

const MetarList = ({airports}) => (
  <div>
    {airports.map(a => (<MetarCard key={a.airportCode} airport={a}/>))}
  </div>
)

export { MetarList }