import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { googleLoginAction, signUp } from "../actions/users";

class GoogleLoginButton extends Component {
  state = {
    email: "",
    emailPassword: "",
    givenName: "",
    familyName: "",
    accessToken: "",
    alias: "",
    hkIdNumber: "",
    gender: "",
    address: "",
    dateOfBirth: "",
    phoneNumber: "",
    emergencyContact: "",
    emergencyContactNumber: "",
    lawyerEmail: "",
    otherEmail: ""
  };

  render() {
    const responseGoogle = response => {
      // console.log("google login res", response);
      const { email, givenName } = response.profileObj;
      const accessToken = response.Zi.access_token;
      this.setState({
        email,
        givenName,
        accessToken
      });
      // console.log("state test", this.state);

      this.props.signUp(this.state);

      this.props.googleLoginAction({
        givenName: this.state.givenName,
        familyName: this.state.familyName,
        email: this.state.email,
        emailPassword: this.state.emailPassword,
        accessToken: this.state.accessToken,
        alias: this.state.alias,
        hkIdNumber: this.state.hkIdNumber,
        gender: this.state.gender,
        address: this.state.address,
        dateOfBirth: this.state.dateOfBirth,
        phoneNumber: this.state.phoneNumber,
        emergencyContact: this.state.emergencyContact,
        emergencyContactNumber: this.state.emergencyContactNumber,
        lawyerEmail: this.state.lawyerEmail,
        otherEmail: this.state.otherEmail
      });
      //this.props.history.push(redirect)
    };
    return (
      <GoogleLogin // To use this feature, I need to put the client website into google dev console credentials
        clientId="41211512517-64dvhdbbcruocksj6il55mefdkqvvcff.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}

export default connect(null, { googleLoginAction, signUp })(GoogleLoginButton);
