import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { test } from "./actions/users";
import GoogleLoginButton from "./components/GoogleLoginButton";
import AliasForm from "./components/AliasForm";

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
      </Fragment>
    );
  }
}

export default connect(null, { test })(App);
