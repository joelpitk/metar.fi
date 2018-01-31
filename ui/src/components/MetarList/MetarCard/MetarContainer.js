import React, { Component } from "react";
import api from "../../../api";
import { MetarCard } from "./MetarCard";

export class MetarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      metar: {}
    };
  }

  componentDidMount() {
    this.getMetar();
  }

  getMetar = async () => {
    this.setState(prevState => ({ loading: true }));
    const { airport } = this.props;

    const metars = await api.getMetar(airport.airportCode);
    this.setState(prevState => ({
      loading: false,
      metar: metars[0] || { raw_metar: "No METAR information available" }
    }));
  };

  render() {
    return (
      <MetarCard
        airport={this.props.airport}
        metar={this.state.metar}
        loading={this.state.loading}
        onRemove={this.props.onRemove}
        onRefresh={this.getMetar}
      />
    );
  }
}
