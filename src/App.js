import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router,  Route ,Routes} from "react-router-dom";
import ContactDetails from "./components/ContactDetails";

function App() {
  const LOCAL_STOTAGE_KEY = "CONTACTS_LS";

  //initializing empty array as contactlist state variable
  const [contactlist, setContactlist] = useState([]);

  const addContactFunction = (contact) => {
    //called from AddContact component.
    //...contactlist - retains all the existing elements
    //And adding the new one
    setContactlist([...contactlist, { id: uuidv4(), ...contact }]);
  };

  const functionInAppToRemoveContact = (id) => {
    //remove the contact based on id
    const newcontactList = contactlist.filter((eachContact) => {
      return eachContact.id !== id;
    });
    setContactlist(newcontactList);
  };
  //First checks local storage has items and state object contactlist is empty.
  //In this case load from localstorage and keep it in the contactlist
  useEffect(() => {
    const localstaragecontact = JSON.parse(
      localStorage.getItem(LOCAL_STOTAGE_KEY)
    );

    if (
      localstaragecontact &&
      localstaragecontact.length > 0 &&
      contactlist.length === 0
    )
      setContactlist(localstaragecontact);
  }, [contactlist]);

  //method to capture changes in the array contactlist and save it to the localstorage with key LOCAL_STOTAGE_KEY
  useEffect(() => {
    localStorage.setItem(LOCAL_STOTAGE_KEY, JSON.stringify(contactlist));
  }, [contactlist]);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList  contacts={contactlist} functionInAppToRemoveContactAsArg={functionInAppToRemoveContact}/>}></Route>
          <Route path="/add" element={<AddContact  addContactHandler={addContactFunction} />}></Route> 
          <Route path="/contactdetail/:id" element={<ContactDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
