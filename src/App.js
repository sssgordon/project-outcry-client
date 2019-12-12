import React, { Component } from "react";
import { connect } from "react-redux";
import AliasFormContainer from "./components/AliasForm";
import DetailsFormContainer from "./components/DetailsForm";
import { Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import alternativeBackgroundImage from "./assets/test-background.jpg";
import backgroundVideo from "./assets/sham-shui-po-bg-vid-2.mp4";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="background">
        <video id="bg-vid" loop autoPlay muted preload="metadata">
          <source src={backgroundVideo} type="video/mp4" />
          <img src={alternativeBackgroundImage} alt="fallback image" />
        </video>
        <div id="background-overlay">
          <Route exact path="/details" component={DetailsFormContainer} />
          <Route exact path="/alias" component={AliasFormContainer} />
          <Route exact path="/" component={Landing} />
        </div>
      </div>
    );
  }
}

export default connect(null)(App);
