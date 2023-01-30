import React, { useState, useEffect } from "react";
import "./App.css";
import People from "./People";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState([]);
  const [showForm, setShowForm] = useState(true);

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

    fetch("http://localhost:3002/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShowForm(false);
      });
  };

  const handleClick = (id, names, name) => {
    console.log(id, names, name);
  };

  return (
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
      {showForm && (
        <form
          className="form-group d-flex w-60"
          style={{ width: "70%" }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control input-width p-1 text-xs mx-2 input-height"
            type="text"
            name="newName"
            required
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
        <div>Hello {name} Welcome to our Task Management portal </div>
      )}
      <div>
        <div>
          <span style={{ position: "absolute", right: "8%", top: "30px" }}>
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
