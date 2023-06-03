import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddContact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { addContactHandler} = props;
     
 
  const save = (e) => {
  // userdefined function for validation and saving the data in the state variable(contact) in App.js(later)
    e.preventDefault();
    if(name==="" || email ==="") {
      alert("All the fields are mandatory")
      return;
    }
    // calling function stored in the variable addContactHandler and passing the state(contins both name and email)
    //calling function defined in the App.js
    addContactHandler({"name" : name, "email" : email}); 
    
    //clearing the textfields afer added to the state.
    setEmail("")
    setName("")

    navigate('/');
  }
  

    
    return (
      <div>
        <h2>Add Contact</h2>
        <form onSubmit={save}>
          <div>
            <label>Name</label>
            <input  type="text" 
                    placeholder="Type Name here" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name}>
            </input>
          </div>
          <div>
            <label>Email</label>
            <input  type="text" 
                    placeholder="Type Email here" 
                    onChange={(e) =>  setEmail(e.target.value)} 
                    value={email}>
            </input>
          </div>
          <button>Add Contact</button>
        </form>
      </div>
    ); 
  }


export default AddContact;