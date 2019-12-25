import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main.js";
import NavBar from "./components/NavBar.js";
import { Container } from "@material-ui/core";
import ParticlesBackground from "./components/ParticlesBackground.js";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh", overflow: "auto", background: "#edefff" }}>
        <ParticlesBackground/>
        <NavBar />
	<Main >
        </Main>
      </div>
    );
  }
}

export default App;
