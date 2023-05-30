import React from "react";

class AddContact extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "", //state variable to store name
      email: "" ////state variable to store email
    }
  }
  //method to set name  - calls onchange of name field
  setName = (namearg) => {
    this.setState({
      name: namearg
    })
  }
   //method to set name - calls onchange of email field
   setEmail = (emailarg) => {
    this.setState({
      email: emailarg
    })
  }

  save = (e) => { // userdefined function for validation and saving the data in the state variable(contact) in App.js(later)
    e.preventDefault();
    if(this.state.name==="" || this.state.email ==="") {
      alert("All the fields are mandatory")
      return;
    }
    console.log(this.state.name)
    console.log(this.state.email)
  }
  
  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <form onSubmit={this.save}>
          <div>
            <label>Name</label>
            <input  type="text" 
                    placeholder="Type Name here" 
                    onChange={(e) => this.setName(e.target.value)} 
                    value={this.state.name}>
            </input>
          </div>
          <div>
            <label>Email</label>
            <input  type="text" 
                    placeholder="Type Email here" 
                    onChange={(e) =>  this.setEmail(e.target.value)} 
                    value={this.state.email}>
            </input>
          </div>
          <button>Add Contact</button>
        </form>
      </div>
    ); 
  }
}

export default AddContact;