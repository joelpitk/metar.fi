import React from "react";
import { Card, CardTitle, CardText, CardActions } from "material-ui/Card";
import ProgressBar from "../../ProgressBar";
import RemoveIcon from "material-ui/svg-icons/content/clear";
import RefreshIcon from "material-ui/svg-icons/action/autorenew";
import IconButton from "material-ui/IconButton";
import "./MetarCard.css";

const MetarCard = ({ airport, metar, loading, onRemove, onRefresh }) => (
  <Card className="metar-card" style={{ animation: "rotateIn 0.5s" }}>
    <CardActions style={{ float: "right", zIndex: 2 }}>
      <IconButton onClick={() => onRefresh()} className="refresh-button" tooltip="Refresh">
        <RefreshIcon />
      </IconButton>
      <IconButton onClick={() => onRemove(airport.airportCode)} className="remove-button" tooltip="Remove">
        <RemoveIcon/>
      </IconButton>
    </CardActions>
    <CardTitle title={airport.airportCode} subtitle={airport.airportName} />
    <div style={{ minHeight: "48px" }}>
      <CardText className="raw-metar">{loading ? <ProgressBar /> : metar.raw_metar}</CardText>
    </div>
  </Card>
);

export { MetarCard };
