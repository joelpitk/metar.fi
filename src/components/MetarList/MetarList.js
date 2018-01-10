import React from "react";
import MetarCard from "./MetarCard"

const MetarList = ({airports}) => (
  <div style={{margin: "2px"}}>
    {airports.map(a => (<MetarCard key={a.airportCode} airport={a}/>))}
  </div>
)

export { MetarList }