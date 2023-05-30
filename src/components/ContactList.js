import React from "react";
import ContactCard from "./ContactCard";

class ContactList extends React.Component {
   
    render() {
        const datatabledivs = this.props.contacts.map((eachContact) =>{
            return (
                <ContactCard contact={eachContact} />
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