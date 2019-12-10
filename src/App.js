import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { test } from "./actions/users";
import GoogleLoginButton from "./components/GoogleLoginButton";
import AliasForm from "./components/AliasForm";
import DetailsFormContainer from "./components/DetailsForm";

class App extends Component {
  onClick = event => {
    event.preventDefault();
    this.props.test();
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.onClick}>Test</button>
        <GoogleLoginButton />
        <AliasForm />
        <DetailsFormContainer />
      </Fragment>
    );
  }
}

export default connect(null, { test })(App);
