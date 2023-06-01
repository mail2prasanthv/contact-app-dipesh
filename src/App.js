import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import { useEffect, useState } from "react";

function App() {
  const LOCAL_STOTAGE_KEY="CONTACTS_LS"

   //initializing empty array as contactlist state variable
  const[contactlist, setContactlist] = useState([]);

  const addContactFunction =(contact) => {
    //called from AddContact component.
    //...contactlist - retains all the existing elements
    //And adding the new one
      setContactlist([...contactlist, contact]);
  }

  //method to capture changes in the array contactlist and save it to the localstorage with key LOCAL_STOTAGE_KEY
  useEffect(()=>{
    localStorage.setItem(LOCAL_STOTAGE_KEY, JSON.stringify(contactlist));
  }, [contactlist])

  return (
    <div>
      <Header/>
      <AddContact  addContactHandler={addContactFunction}/>
      <ContactList contacts={contactlist}/>
    </div>
  );
}

export default App;
