import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createAlias, createDialogflowEntity } from "../../actions/alias";
import { getUserDetails } from "../../actions/users";
import AliasForm from "./AliasForm";

class AliasFormContainer extends Component {
  state = {
    alias: "",
    loading: null
  };

  componentDidMount = () => {
    this.props.getUserDetails(this.props.user.email);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user.alias && prevProps.user !== this.props.user) {
      this.setState({ ...this.state, ...this.props.user, loading: false });
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log("onChange test", this.state);
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createAlias(this.state, this.props.user.email);
    this.props.createDialogflowEntity(
      this.state.alias,
      this.props.user.accessToken
    );
  };

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
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
    user: reduxState.user
    // email: reduxState.user.email,
    // accessToken: reduxState.user.accessToken
  };
};

export default connect(mapStateToProps, {
  createAlias,
  createDialogflowEntity,
  getUserDetails
})(AliasFormContainer);
