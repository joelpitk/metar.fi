import React, { Component } from "react";
import api from "../../api";
import { SearchInput } from "./SearchInput";
import LinearProgress from 'material-ui/LinearProgress';

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
      this.state.loading ? <LinearProgress style={{backgroundColor: "#e0e0e0"}} mode="indeterminate" /> : <SearchInput airports={this.state.airports} onAirportSelected={this.props.onAirportSelected} />
    );
  }
}
