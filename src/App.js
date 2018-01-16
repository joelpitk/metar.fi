import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MenuBar from "./components/MenuBar";
import AirportSearch from "./components/AirportSearch";
import MetarList from "./components/MetarList";

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            width: "100vw"
          }}
        >
          <MenuBar />
          <div
            style={{
              flex: "0 0 10%",
              maxWidth: "800px",
              width: "80vw",
              marginTop: "100px"
            }}
          >
            <AirportSearch onAirportSelected={this.onAirportSelected} />
          </div>
          <div
            style={{
              flex: "0 1 80%",
              maxWidth: "800px",
              width: "80vw",
              overflowY: "auto",
              overflowX: "hidden"
            }}
          >
            <MetarList
              airports={this.state.selectedAirports}
              onRemove={this.onRemoveAirport}
            />
          </div>
          <footer 
              style={{
              padding: "4px",
              maxHeight: "40px",
              maxWidth: "800px",
              width: "80vw",
              overflow: "hidden",
              color: "#d0d0d0",
              textAlign: "center",
              fontSize: "10px"
            }}>
            All data is provided by <a href="https://www.icao.int/">ICAO</a>. All data is provided without any warranty. Use at your own risk.
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;