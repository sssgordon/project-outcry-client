import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function AliasForm(props) {
  // create button and update button, depends on weather redux state has user alias

  return (
    <Fragment>
      <form onSubmit={props.onSubmit}>
        <input
          onChange={props.onChange}
          value={props.value}
          name="alias"
          placeholder="Enter your alias"
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Landing</Link>
    </Fragment>
  );
}
