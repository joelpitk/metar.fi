import React from "react";
import {
  Card,
  CardTitle,
  CardText
} from "material-ui/Card";
import LinearProgress from 'material-ui/LinearProgress';

const MetarCard = ({airport, metar, loading}) => (
  <Card>
    <CardTitle title={airport.airportCode} subtitle={airport.airportName}/>
    <CardText>{loading ? <LinearProgress style={{backgroundColor: "#e0e0e0"}} mode="indeterminate" /> : metar.raw_metar}</CardText>
  </Card>
);

export { MetarCard };