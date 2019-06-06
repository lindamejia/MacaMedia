import React, { Component } from "react";
import { Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Releases from "./components/releases/Releases";
import Artists from "./components/artists/Artists";
import Contact from "./components/contact/Contact";
import "./App.css";

//redux stuff

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/releases" render={props => <Releases {...props} />} />
        <Route path="/artists" render={props => <Artists {...props} />} />
        <Route path="/contact" render={props => <Contact {...props} />} />
        <Footer />
      </div>
    );
  }
}

export default App;
