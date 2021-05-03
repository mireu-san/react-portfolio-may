import React, { Component } from "react";
import Router from "Components/Router";
import Navbar from "Components/Navbar/Navbar";



class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Router />
      </>
    );
  }
}

export default App;
