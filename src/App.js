import React from "react";
import "./App.css";
import Main from "./components/Main.js";
import NavBar from "./components/NavBar.js";

const App = () => {
    return (
      <div style={{ height: "100vh",
                    display: "flex",
		    flexFlow: "column",
                    overflow: "auto",
		    background: "#edefff",
		    background: "-webkit-linear-gradient(to bottom, #FFFFFF, #edefff)",
		    background: "linear-gradient(to bottom, #FFFFFF, #edefff)",
                  }}>
        <NavBar />
      <Main />
      </div>
    );
}

export default App;
