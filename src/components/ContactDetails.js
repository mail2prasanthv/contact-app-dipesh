import React from "react";
import { useLocation } from "react-router-dom";

function ContactDetails(props) {
  const location = useLocation();

  const { name, email } = location.state.contact; // Destructuring contact json to local variables
  //the list of contacts passed to this component is accessed by this.props.{mapname}
  //contents of contacts list converts data divs
  // display:"inline"} - keeps the element in the same line
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "inline", marginRight: "20px" }}>{name} </div>
      <div style={{ display: "inline", marginRight: "20px" }}>{email}</div>
    </div>
  );
}

export default ContactDetails;
