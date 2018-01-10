import React, { Component } from "react";
import AutoComplete from "material-ui/AutoComplete";
import MenuItem from "material-ui/MenuItem";

const toAirportItem = airport => ({
  airportCode: airport.airportCode,
  airport: airport,
  value: (
    <MenuItem
      primaryText={airport.airportCode}
      secondaryText={airport.airportName}
    />
  )
});

const filterCaseInsensitive = (searchText, key) =>
  key.toLowerCase().includes(searchText.toLowerCase());

const sortByAirportCode = (airport1, airport2) => {
  if (airport1.airportCode < airport2.airportCode) {
    return -1;
  }
  if (airport1.airportCode > airport2.airportCode) {
    return 1;
  }
  return 0;
};

export class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.airports = props.airports;
    this.state = {
      searchText: ""
    };
  }

  onUpdateInput = searchText => {
    this.setState({ searchText });
  };

  onNewRequest = chosenRequest => {
    const selectedAirport =
      chosenRequest.airport ||
      this.airports.find(
        airport =>
          airport.airportCode.toLowerCase() === chosenRequest.toLowerCase()
      );
    if (selectedAirport) {
      this.props.onAirportSelected(selectedAirport);
      this.setState({ searchText: "" });
    }
  };

  render() {
    return (
      <AutoComplete
        fullWidth={true}
        hintText="Airport ICAO code"
        maxSearchResults={10}
        dataSource={this.props.airports
          .sort(sortByAirportCode)
          .map(toAirportItem)}
        dataSourceConfig={{ text: "airportCode", value: "value" }}
        filter={filterCaseInsensitive}
        searchText={this.state.searchText}
        onUpdateInput={this.onUpdateInput}
        onNewRequest={this.onNewRequest}
      />
    );
  }
}
