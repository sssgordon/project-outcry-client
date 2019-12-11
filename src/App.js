import React, { Component } from "react";
import { connect } from "react-redux";
import AliasFormContainer from "./components/AliasForm";
import DetailsFormContainer from "./components/DetailsForm";
import { Route, Link } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="background">
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
