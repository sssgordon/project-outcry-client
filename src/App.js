import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { login } from "./actions/users";
import GoogleLoginButton from "./components/GoogleLoginButton";
import AliasForm from "./components/AliasForm";

class App extends Component {
  onClick = event => {
    event.preventDefault();
    this.props.login();
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

export default connect(null, { login })(App);
