import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import { useState } from "react";

function App() {

   //initializing empty array as contactlist state variable
  const[contactlist, setContactlist] = useState([]);

  const addContactFunction =(contact) => {
    //called from AddContact component.
    //...contactlist - retains all the existing elements
    //And adding the new one
      setContactlist([...contactlist, contact]);
  }
  return (
    <div>
      <Header/>
      <AddContact  addContactHandler={addContactFunction}/>
      <ContactList contacts={contactlist}/>
    </div>
  );
}

export default App;
