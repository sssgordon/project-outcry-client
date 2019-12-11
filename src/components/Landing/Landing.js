import React, { Component } from "react";
import GoogleLoginButton from "../GoogleLoginButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Landing.css";

class Landing extends Component {
  render() {
    const { user } = this.props;

    const detailsLink = user.email && (
      <Link to="/details">
        <p>Details</p>
      </Link>
    );
    const aliasLink = user.email && (
      <Link to="/alias">
        <p>Alias</p>
      </Link>
    );

    return (
      <div id="landing-wrapper-parent">
        <div id="landing-wrapper">
          <div id="login-btn-wrapper">
            <p>登入帳號：</p>
            <GoogleLoginButton id="login-btn" />
            {detailsLink}
            {aliasLink}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return { user: reduxState.user };
};

export default connect(mapStateToProps)(Landing);
