import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import DetailsForm from "./DetailsForm";
import { updateUserDetails, getUserDetails } from "../../actions/users";

class DetailsFormContainer extends Component {
  state = {
    hkIdNumber: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    phoneNumber: "",
    emergencyContact: "",
    emergencyContactNumber: "",
    lawyerEmail: "",
    otherEmail: "",
    emailPassword: "",
    loading: null
  };

  componentDidMount = () => {
    this.props.getUserDetails(this.props.user.email);
  };

  componentDidUpdate(prevProps, prevState) {
    // checkin to see if we have a user with prior information
    // We only want to check it once so don't setState if the user is the same user as before
    // easy way: make the fetch request a "fetch" and then setState() in the .then()
    if (this.props.user.address && prevProps.user !== this.props.user) {
      this.setState({ ...this.state, ...this.props.user, loading: false });
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.updateUserDetails(this.state, this.props.user.email);
  };

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    return (
      <Fragment>
        <DetailsForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};

export default connect(mapStateToProps, { updateUserDetails, getUserDetails })(
  DetailsFormContainer
);
