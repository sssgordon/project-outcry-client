import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
    loading: true
  };

  componentDidMount = () => {
    this.props.getUserDetails(this.props.email);
    this.setState({ loading: false });
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
        <Link to="/">Landing</Link>
      </Fragment>
    );
  }
}

const mapStateToProps = reduxState => {
  return { email: reduxState.user.email };
};

export default connect(mapStateToProps, { updateUserDetails, getUserDetails })(
  DetailsFormContainer
);
