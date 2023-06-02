import React from "react";
import ContactCard from "./ContactCard";

class ContactList extends React.Component {
   
    functionInContactListToPassIdToApp(idToBeDeleted)  { 
        console.log("Inside ContactList", this.props.functionInAppToRemoveContactAsArg)
        this.props.functionInAppToRemoveContactAsArg(idToBeDeleted)
      }

    render() {
        const datatabledivs = this.props.contacts.map((eachContact) =>{
            return (
                <ContactCard contact={eachContact} functionInContactListToPassIdToAppAsArg ={this.props.functionInAppToRemoveContactAsArg}/>
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