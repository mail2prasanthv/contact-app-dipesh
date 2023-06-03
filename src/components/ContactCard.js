import React from "react";
import { Link } from "react-router-dom";

class ContactCard extends React.Component {
 
  constructor(props) {
    super(props);
  }
  render() {

    
    const {id, name, email } = this.props.contact;// Destructuring contact json to local variables
     //the list of contacts passed to this component is accessed by this.props.{mapname}
        //contents of contacts list converts data divs
        // display:"inline"} - keeps the element in the same line
    return (
      <div style={{ marginBottom: "20px" }}>
        <Link
          to={"/contactdetail/" + id}
          state={{ contact: this.props.contact }}
        >
          <div style={{ display: "inline", marginRight: "20px" }}>{name} </div>
          <div style={{ display: "inline", marginRight: "20px" }}>{email}</div>
        </Link>
        <button
          onClick={() => this.props.functionInContactListToPassIdToAppAsArg(id)}
        >
          Delete Me
        </button>
      </div>
    );
  }
}

export default ContactCard;
