import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "./actions/users";

class App extends Component {
  onClick = event => {
    event.preventDefault();
    this.props.login();
  };

  render() {
    return <button onClick={this.onClick}>Test</button>;
  }
}

export default connect(null, { login })(App);
