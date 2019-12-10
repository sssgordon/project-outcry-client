import React, { Component } from "react";
import { connect } from "react-redux";
import DetailsForm from "./DetailsForm";
import { updateUserDetails } from "../../actions/users";

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
    emailPassword: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.updateUserDetails(this.state, this.props.email);
  };

  render() {
    return (
      <DetailsForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = reduxState => {
  return { email: reduxState.user.email };
};

export default connect(mapStateToProps, { updateUserDetails })(
  DetailsFormContainer
);
