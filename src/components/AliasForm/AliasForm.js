import React from "react";

export default function AliasForm(props) {
  // create button and update button, depends on weather redux state has user alias

  return (
    <form onSubmit={props.onSubmit}>
      <input
        onChange={props.onChange}
        value={props.value}
        name="alias"
        placeholder="Enter your alias"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
