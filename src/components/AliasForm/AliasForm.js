import React from "react";
import { Link } from "react-router-dom";
import "./AliasForm.css";
import editUserDetails from "../../assets/edit-user-details-white.png";
import outcry from "../../assets/outcry-white.png";
import editAlias from "../../assets/edit-alias-white.png";

export default function AliasForm(props) {
  // create button and update button, depends on weather redux state has user alias

  return (
    <div id="alias-wrapper-parent">
      <div id="alias-wrapper">
        <Link to="/">
          <img className="outcry" src={outcry} alt="title" />
        </Link>
        <Link to="/details">
          <img
            className="edit-user-details"
            src={editUserDetails}
            alt="edit-user-details"
          />
        </Link>
        <div id="alias-form-wrapper">
          <p id="enter-alias">輸入個人代號:</p>
          <form onSubmit={props.onSubmit}>
            <input
              onChange={props.onChange}
              value={props.value}
              name="alias"
              placeholder="Enter your alias"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <img id="edit-user-alias" src={editAlias} alt="edit-user-alias" />
      </div>
    </div>
  );
}
