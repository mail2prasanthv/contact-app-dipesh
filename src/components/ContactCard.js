import React from "react";

class ContactCard extends React.Component {
  render() {
     //the list of contacts passed to this component is accessed by this.props.{mapname}
        //contents of contacts list converts data divs
        // display:"inline"} - keeps the element in the same line
    return (
    <div style={{marginBottom:"20px"}}>
      <div style={{ display:"inline", marginRight:"20px"}}>{this.props.namearg} </div>
      <div style={{ display:"inline", marginRight:"20px"}}>{this.props.emailarg}</div>
      <button>Delete Me</button>
    </div>
    );
  }
}

export default ContactCard;
