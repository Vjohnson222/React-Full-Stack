import React, { useState, useEffect } from "react";
import "./App.css";
import People from "./People";

function Profile(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    fetch("/people")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.newName.value;
    const email = event.target.newEmail.value;
    setIsHidden(true);

    fetch("http://localhost:3001/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShowForm(false);
        props.setLoggedIn(true)
      });
  };

  const handleClick = (id, names, name) => {
    console.log(id, names, name);
  };

  return (

<div className="container"> <br /> <br />
{!isHidden ? (
  <div className="row formLabels">
   
          <h1>Create a User Profile</h1>

    <div className="col-3">
      <br />
      <h6>Enter Name</h6>
    </div>
    <div className="col-4 offset-1">
      <br />
      <h6>Enter Email</h6>
    </div>
  </div>
) : null}
      {showForm && (
        
        <form
          className=" d-flex w-60"
          style={{ width: "75%", display: "flex", justifyContent: "center" }}
          onSubmit={handleSubmit}
        >
          <input
            className="form-control input-width p-1 text-xs mx-2 input-height"
            type="text"
            name="newName"           
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control input-width p-1 text-xs mx-2 input-height"
            type="text"
            name="newEmail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          
          <button
            type="submit"
            className="form-control p-1 text-xs mx-2 input-height"
            style={{ width: "calc(50% - 10px)" }}
          >
            Submit
          </button>
        </form>
      )}
      {!showForm && (
              <div style={{ position: "absolute", right: "28%",marginLeft: "120px", top: "102px", color: "white", fontSize: "22px"}}><h3>Hello {name},</h3>
              <h3>Welcome to your Task Management portal</h3>
              <p>Take a look around.</p> 
<p style={{ textIndent: '30px',}}>Use the "Task Management" section to complete the needed tasks and earn points as you do.</p>
<p style={{ textIndent: '30px',}}>Another awesome option is to visit the "Extra Page". Here you will be presented with a sequence of steps that will enable you to create a database and connect it to your working application. Pay close attention here. You will most likely have to do this several times throughout your web-dev career.</p>
<p style={{ textIndent: '30px',}}> Lastly, feel free to hit the "Show all Users" button above to see and connect with others in your web-dev community.</p>
</div>

      )}
      <div>
        <div>
          <span style={{ position: "absolute", right: "8%", top: "27px" }}>
            <People />
          </span>
        </div>
        <div id="teacher">
          <ul>
            {info.map((people) => (
              <li
                className="name"
                key={people.id}
                onClick={() =>
                  handleClick(people.id, people.names, people.name)
                }
              >
                {people.names}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
