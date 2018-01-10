import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MenuBar from "./components/MenuBar";
import AirportSearch from "./components/AirportSearch";
import MetarList from "./components/MetarList";

const theme = getMuiTheme({
  palette: {
    primary1Color: "#22225c",
    primary2Color: "#504a8a",
    primary3Color: "#000032"
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

  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", width: "100vw"}}>
          <div style={{flex: "0 0 10%", maxWidth: "800px", width: "80vw"}}>
            <h1 style={{fontSize: "72px"}}>METAR</h1>
          </div>
          <div style={{flex: "0 0 10%", maxWidth: "800px", width: "80vw"}}>
            <AirportSearch onAirportSelected={this.onAirportSelected} />
          </div>
          <div style={{flex: "0 1 80%", maxWidth: "800px", width: "80vw", overflowY: "auto", overflowX: "hidden"}}>
            <MetarList airports={this.state.selectedAirports} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
