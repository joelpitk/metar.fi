import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MenuBar from "./components/MenuBar";
import AirportSearch from "./components/AirportSearch";
import MetarList from "./components/MetarList";
import "./App.css";

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
        <div style={{ marginTop: "100px" }}>
          <MenuBar />
          <div
            style={{
              maxWidth: "860px",
              margin: "0 auto"
            }}
          >
            <div style={{marginLeft: "5%", marginRight: "5%"}}>
              <AirportSearch onAirportSelected={this.onAirportSelected} />
              <div style={{ marginTop: "20px" }}>
                <MetarList airports={this.state.selectedAirports} />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
