import React, { Component, Fragment } from "react";
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

    // const detailsLink = (
    //   <Link to="/details" style={{ textDecoration: "none" }}>
    //     <p className={`${user.email ? "fade-in" : "hidden"}`}>Details</p>
    //   </Link>
    // );
    // const aliasLink = user.email && (
    //   <Link to="/alias">
    //     <p>Alias</p>
    //   </Link>
    // );

    return (
      <Fragment>
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
            <div id="login-btn-wrapper">
              <p>登入帳號：</p>
              <GoogleLoginButton />
            </div>
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
          {/* {detailsLink} */}
          {/* {aliasLink} */}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = reduxState => {
  return { user: reduxState.user };
};

export default connect(mapStateToProps)(Landing);
