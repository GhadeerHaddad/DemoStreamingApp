import React, { Component } from "react";
import "./App.css";
import Home from "./Containers/HomePage/home";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfCards: 2,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
