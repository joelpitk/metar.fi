import React from "react";
import AppBar from "material-ui/AppBar";

const MenuBar = ({ verifying }) => (
  <AppBar
    title="METAR.fi"
    iconStyleLeft={{ display: "none" }}
    style={{ position: "fixed", top: 0, boxShadow: "rgba(0, 0, 0, 0.22) 0px 2px 6px, rgba(0, 0, 0, 0.22) 0px 2px 4px" }}
  />
);

export { MenuBar };
