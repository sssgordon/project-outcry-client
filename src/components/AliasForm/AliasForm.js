import React from "react";
import { Link } from "react-router-dom";
import "./AliasForm.css";

export default function AliasForm(props) {
  // create button and update button, depends on weather redux state has user alias

  return (
    <div id="alias-wrapper-parent">
      <div id="alias-wrapper">
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
          {/* <Link to="/">Landing</Link> */}
        </div>
      </div>
    </div>
  );
}
