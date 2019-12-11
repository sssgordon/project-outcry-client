import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { test } from "./actions/users";
import AliasFormContainer from "./components/AliasForm";
import DetailsFormContainer from "./components/DetailsForm";
import { Route, Link } from "react-router-dom";
import Landing from "./components/Landing/Landing";

class App extends Component {
  onClick = event => {
    event.preventDefault();
    this.props.test();
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.onClick}>Test</button>
        {/* <Landing /> */}
        <Route exact path="/details" component={DetailsFormContainer} />
        <Route exact path="/alias" component={AliasFormContainer} />
        <Route exact path="/" component={Landing} />
      </Fragment>
    );
  }
}

export default connect(null, { test })(App);
