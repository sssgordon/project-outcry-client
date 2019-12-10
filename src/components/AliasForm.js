import React, { Component } from "react";
import { connect } from "react-redux";
import { createAlias } from "../actions/alias";

class AliasForm extends Component {
  state = {
    alias: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log("onChange test", this.state);
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createAlias(this.state, this.props.email);
    this.setState({ alias: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          value={this.state.alias}
          name="alias"
          placeholder="Enter your alias"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = reduxState => {
  return { email: reduxState.user.email };
};

export default connect(mapStateToProps, { createAlias })(AliasForm);
