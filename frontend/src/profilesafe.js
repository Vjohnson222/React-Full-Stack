import React, { useState, useEffect } from "react";
import "./App.css";
import People from "./People";


function Profile() {

 const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [info, setInfo] = useState([]);
const [showForm, setShowForm] = useState(true);

useEffect(() => {
  fetch('/people')
  .then(res => res.json())
  .then(data => {
  setInfo(data);
  });
  }, []);

  const handleSubmit2 = (event) => {
    event.preventDefault();
    const name = event.target.newName.value;
    const email = event.target.newEmail.value;


 fetch("http://localhost:3002/people", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email })
}).then(res => res.json()).then(data => {
    setShowForm(false);
});
}

const handleClick = (id, names, name) => {
console.log(id, names, name);
}

  return (
    <div>
<h1>USERS</h1>
      <People onSelect={handleSelectPerson} />
      <ul>
        {people.map((person) => (
          <li
            key={person.id}
            onClick={() => handleSelectPerson(person)}
            className="person"
          >
            {person.name}
          </li>
        ))}
      </ul>
      {currentPerson && (
       
     
        <>
          <h2>{currentPerson.name}'s Todos</h2>
          <form onSubmit={handleAddTodo}>
            <input
              type="text"
              value={newTodo.name}
              onChange={(event) => setNewTodo({ name: event.target.value })}
            />
            <button type="submit">Add Todo</button>
          </form>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className="todo">
                {todo.name}
              </li>
            ))}
          </ul>
        </>
      )}
      <Profile />
    </div>
  );
}

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
   

            // here we're tagging the name and the email address 
            body: JSON.stringify({
                name: name,
                email: email
            })
        }).then(res => res.json()).then(data => {
            console.log(data);
            window.location = "/"
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <br />
                        <h5>Enter Name</h5>
                    </div>
                    <div className="col-6">
                        <br />
                        <h5>Enter Email</h5>
                    </div>
                </div>
            </div>
            <form id="create_person" className="form-group d-flex w-60 " autoComplete="off" onSubmit={handleSubmit}>
                <input className="form-control w-50 p-1 text-xs mx-2 input-height"
                    type="text"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input className="form-control w-25 p-1 text-xs mx-2 input-height"
                    type="text"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <br />
                <br />
                <button
                    className="form-control w-25 p-1 text-xs mx-2 input-height"
                    type="submit"
                    style={{
                        borderStyle: 'solid',
                        borderColor: 'grey',
                        color: 'Grey',
                        width: '50px',
                        paddingTop: "0px"
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Profile;
