import React, { useState } from "react";
import App from "./App";
import Eye from "./Eye";
import Profile from "./Profile";
import Extra from "./Extra";

//Straight From our router Lesson
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App2() {

  const [loggedIn, setLoggedIn] = useState(false);

  const h1Style = {
       fontSize: "40px",
        color: "black",
  };
  return (
    <Router>
      <br />

      <div>
        <nav>
          <Link className="navLink" to="/">
            HOME
          </Link>
          { loggedIn ? <Link className="navLink" to="/App">
            TASK MANAGEMENT
          </Link>: ""}
          

          <Link className="navLink" to="/Profile">
            Welcome to Task Management
          </Link>

          { loggedIn ?   <Link className="navLink" to="/Extra">
            EXTRA
          </Link> : ""}

          <Routes>
            <Route path="/App" element={<App />} />
            <Route path="/" element={<Eye />} />
            <Route path="/Profile" element={<Profile setLoggedIn={setLoggedIn} />} />
            <Route path="/Extra" element={<Extra />} />
          </Routes>
        </nav>
      </div>
    </Router>
  );
}

export default App2;

