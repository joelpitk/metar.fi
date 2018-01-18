import React, { Component } from "react";
import api from "../../api";
import { SearchInput } from "./SearchInput";
import ProgressBar from "../ProgressBar";

export class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, airports: [] };
  }

  async componentDidMount() {
    this.setState(prevState => ({ loading: true }));
    const airports = await api.getMetarAirports();
    this.setState(prevState => ({
      loading: false,
      airports: airports
    }));
  }

  render() {
    return (
      this.state.loading ? <ProgressBar /> : <SearchInput airports={this.state.airports} onAirportSelected={this.props.onAirportSelected} />
    );
  }
}
