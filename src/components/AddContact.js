import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Type Name here"></input>
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Type Email here"></input>
          </div>
          <button>Add Contact</button>
        </form>
      </div>
    ); 
  }
}

export default AddContact;