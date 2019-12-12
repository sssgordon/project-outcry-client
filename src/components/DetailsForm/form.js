<form onSubmit={props.onSubmit}>
  <input
    onChange={props.onChange}
    value={props.values.hkIdNumber}
    name="hkIdNumber"
    placeholder="HKID number"
  />
  <input
    onChange={props.onChange}
    value={props.values.gender}
    name="gender"
    placeholder="Gender"
  />
  <input
    onChange={props.onChange}
    value={props.values.dateOfBirth}
    name="dateOfBirth"
    placeholder="YYYY-MM-DD"
  />
  <input
    onChange={props.onChange}
    value={props.values.address}
    name="address"
    placeholder="Address"
  />
  <input
    onChange={props.onChange}
    value={props.values.phoneNumber}
    name="phoneNumber"
    placeholder="Phone number"
  />
  <input
    onChange={props.onChange}
    value={props.values.emergencyContact}
    name="emergencyContact"
    placeholder="Who is your emergency contact?"
  />
  <input
    onChange={props.onChange}
    value={props.values.emergencyContactNumber}
    name="emergencyContactNumber"
    placeholder="What is his/her contact number?"
  />
  <input
    onChange={props.onChange}
    value={props.values.lawyerEmail}
    name="lawyerEmail"
    placeholder="Lawyer email"
  />
  <input
    onChange={props.onChange}
    value={props.values.otherEmail}
    name="otherEmail"
    placeholder="Other email"
  />
  <input
    onChange={props.onChange}
    value={props.values.emailPassword}
    name="emailPassword"
    placeholder="Your gmail password"
  />
  <button type="submit">Submit</button>
</form>;
