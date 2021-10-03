import React from "react";
import AppIcon from "../Components/AppIcon";
import Nav from "../Components/Nav";

import "../styles/Header.scss";

export default function NavBar() {
  return (
    <header className="app_header">
      <AppIcon />
      <Nav />
    </header>
  );
}
