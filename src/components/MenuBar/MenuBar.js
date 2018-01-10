import React from "react";
import AppBar from "material-ui/AppBar";

const MenuBar = ({ verifying }) => (
  <AppBar
    title="METAR"
    iconStyleLeft={{ display: "none" }}
    style={{ position: "fixed", top: 0 }}
  />
);

export { MenuBar };
