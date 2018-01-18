import React, { Component } from "react";
import api from "../../api";
import { SearchInput } from "./SearchInput";
import ProgressBar from "../ProgressBar";
import ErrorCard from "../ErrorCard";

export class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, airports: [] };
  }

  componentDidMount() {
    this.getMetarAirports()
  }

  getMetarAirports = async () => {
    this.setState(prevState => ({ loading: true, error: false }));
    const airports = await api.getMetarAirports();

    if (airports.error) {
      this.setState(prevState => ({loading: false, error: airports.error }));
      return;
    }

    this.setState(prevState => ({
      loading: false,
      airports: airports
    }));
  }

  render() {
    if (this.state.error) {
      return (<ErrorCard retryAfterSeconds={10} message="Failed to fetch airports" onRetry={this.getMetarAirports} />)
    }
    return (
      this.state.loading ? <ProgressBar /> : <SearchInput airports={this.state.airports} onAirportSelected={this.props.onAirportSelected} />
    );
  }
}
