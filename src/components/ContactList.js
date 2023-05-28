import React from "react";

class ContactList extends React.Component {
   
    render() {
        //the list of contacts passed to this component is accessed by this.props.{mapname}
        //contents of contacts list converts data divs
        // display:"inline"} - keeps the element in the same line
        const datatabledivs = this.props.contacts.map((eachContact) =>{
            return (
                <div style={{marginBottom:"20px"}}>
                    <div style={{ display:"inline", marginRight:"20px"}}>{eachContact.name} </div>
                    <div style={{ display:"inline", marginRight:"20px"}}> {eachContact.email}</div>
                    <button>Delete Me</button>
                </div>
            )
        });
       
        return (
            <div>
                <h1>List of Contacts</h1>
                {datatabledivs}
            </div>
        );
    }
}

export default ContactList;