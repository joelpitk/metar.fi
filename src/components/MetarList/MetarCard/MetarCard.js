import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions
} from "material-ui/Card";
import LinearProgress from 'material-ui/LinearProgress';
import RemoveIcon from 'material-ui/svg-icons/content/clear';
import RefreshIcon from 'material-ui/svg-icons/action/autorenew';
import IconButton from 'material-ui/IconButton';
import "./MetarCard.css"

const MetarCard = ({airport, metar, loading, onRemove, onRefresh}) => (
  <Card style={{animation: "rotateIn 0.5s"}} >
    <CardActions style={{float: "right", zIndex: 2}}>
      <IconButton tooltip="Refresh"><RefreshIcon onClick={onRefresh}/></IconButton>
      <IconButton tooltip="Remove"><RemoveIcon onClick={() => onRemove(airport.airportCode)}/></IconButton>
    </CardActions>
    <CardTitle title={airport.airportCode} subtitle={airport.airportName}/>
    <div style={{minHeight: "48px"}}>
      <CardText>{loading ? <LinearProgress style={{backgroundColor: "#e0e0e0"}} mode="indeterminate"/> : metar.raw_metar}</CardText>
    </div>
  </Card>
);

export { MetarCard };