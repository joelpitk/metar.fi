import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MenuBar from "./components/MenuBar";
import AirportSearch from "./components/AirportSearch";
import MetarList from "./components/MetarList";
import "./App.css";

const theme = getMuiTheme({
  palette: {
    primary1Color: "#00658c"
  },
  appBar: {
    height: 50
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAirports: []
    };
  }

  onAirportSelected = airportCode => {
    this.setState(previousState => ({
      selectedAirports: [...previousState.selectedAirports, airportCode]
    }));
  };

  onRemoveAirport = airportCode => {
    this.setState(previousState => ({
      selectedAirports: previousState.selectedAirports.filter(
        airport => airport.airportCode !== airportCode
      )
    }));
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="main">
          <MenuBar />
          <div className="airport-search-container">
            <AirportSearch onAirportSelected={this.onAirportSelected} />
          </div>
          <div className="metar-list-container">
            <MetarList
              airports={this.state.selectedAirports}
              onRemove={this.onRemoveAirport}
            />
          </div>
          <footer>
            All data is provided by <a href="https://www.icao.int/" target="_blank" rel="noopener noreferrer">ICAO</a>. All data is provided without any warranty. Use at your own risk.
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;