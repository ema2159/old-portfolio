import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main.js";
import NavBar from "./components/NavBar.js";
import { Container } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh",
                    overflow: "auto",
		    background: "#edefff",
		    background: "-webkit-linear-gradient(to bottom, #FFFFFF, #edefff)",
		    background: "linear-gradient(to bottom, #FFFFFF, #edefff)",
                  }}>
	<Main />
        <NavBar />
      </div>
    );
  }
}

export default App;
