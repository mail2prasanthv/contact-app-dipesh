import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";

function App() {
const contactlist= [
  {
    "id": 1,
    "name":"Prasanth1",
    "email": "111@cde.com"
  },
  {
    "id": 2,
    "name":"Prasanth2",
    "email": "222@cde.com"
  },
  {
    "id": 3,
    "name":"Prasanth3",
    "email": "333@cde.com"
  }
]

  return (
    <div>
      <Header/>
      <AddContact />
      <ContactList contacts={contactlist}/>
    </div>
  );
}

export default App;
