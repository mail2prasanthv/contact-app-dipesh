import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import { useState } from "react";

function App() {

   //initializing empty array as contactlist state variable
  const[contactlist, setContactlist] = useState([]);

  return (
    <div>
      <Header/>
      <AddContact />
      <ContactList contacts={contactlist}/>
    </div>
  );
}

export default App;
