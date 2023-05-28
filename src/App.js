import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";

function App() {

  return (
    <div>
      <Header/>//  including header component in the App component
      <AddContact />
    </div>
  );
}

export default App;
