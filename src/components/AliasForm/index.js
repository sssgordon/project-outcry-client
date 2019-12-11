import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createAlias, createDialogflowEntity } from "../../actions/alias";
import AliasForm from "./AliasForm";

class AliasFormContainer extends Component {
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
    this.props.createDialogflowEntity(this.state.alias, this.props.accessToken);
    this.setState({ alias: "" });
  };

  render() {
    return (
      <Fragment>
        <AliasForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          value={this.state.alias}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    email: reduxState.user.email,
    accessToken: reduxState.user.accessToken
  };
};

export default connect(mapStateToProps, {
  createAlias,
  createDialogflowEntity
})(AliasFormContainer);
