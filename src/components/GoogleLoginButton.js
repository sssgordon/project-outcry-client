import React, { Component } from "react";
import GoogleLogin from "react-google-login";

export default class GoogleLoginButton extends Component {
  state = {
    email: "",
    givenName: "",
    familyName: "",
    accessToken: ""
  };

  render() {
    const responseGoogle = response => {
      // console.log("google login res", response);
      const { email, givenName, familyName } = response.profileObj;
      const accessToken = response.Zi.access_token;
      this.setState({
        email,
        givenName,
        familyName,
        accessToken
      });
      // console.log("state test", this.state);
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
