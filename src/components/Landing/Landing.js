import React, { Component } from "react";
import GoogleLoginButton from "../GoogleLoginButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import outcryWhite from "../../assets/outcry-white.png";
import editUserDetails from "../../assets/edit-user-details-white.png";
import editAlias from "../../assets/edit-alias-white.png";
import "./Landing.css";

class Landing extends Component {
  render() {
    const { user } = this.props;

    const loginDisplay = user.email ? (
      <div
        style={{
          position: "relative",
          top: "18px",
          animationName: "fadeIn",
          animationDuration: "0.5s",
          animationTimingFunction: "ease-in"
        }}
      >
        <p
          style={{ fontFamily: "Couplet", fontSize: "40px", margin: "15px 0" }}
        >
          歡迎
        </p>
        <p style={{ fontFamily: "Libre Baskerville", margin: "15px 0" }}>
          {user.givenName}
        </p>
      </div>
    ) : (
      <div>
        <p>登入帳號：</p>
        <GoogleLoginButton />
      </div>
    );

    return (
      <div id="landing-wrapper-parent">
        <div id="landing-wrapper">
          <img id="outcry" src={outcryWhite} alt="title" />
          <Link to="/details">
            <img
              className={`${
                user.email ? "edit-user-details" : "edit-user-details-hidden"
              }`}
              src={editUserDetails}
              alt="edit-user-details"
            />
          </Link>
          <div id="login-btn-wrapper">{loginDisplay}</div>
          <Link to="/alias">
            <img
              className={`${
                user.email ? "edit-user-alias" : "edit-user-alias-hidden"
              }`}
              src={editAlias}
              alt="edit-user-alias"
            />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return { user: reduxState.user };
};

export default connect(mapStateToProps)(Landing);
