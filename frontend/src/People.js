//This used to be the App.js from Frontend 2
//So when I pull up that functioning people
// This is the part that if I'm not mistaken shows the people 

//Cool so the only thing missing now is to do the comparison
// and disection on the 2 different Forms Fingers crossed :) 
import React, { useState, useEffect } from 'react';
import './App.css';

function People() {
const [people, setPeople] = useState([]);
const [isVisible, setIsVisible] = useState(false);

//This right here is what you server has to say when you call it - 3000
//This is my Database This port has to say the same as your server
useEffect(() => {
fetch("http://localhost:3001/people")
.then(res => res.json())
.then(data => setPeople(data));
}, []);

return (

<div className="People">
<div className="form-container">
<button   className="custom-button"onClick={() => setIsVisible(!isVisible)}>
{isVisible ? "Hide" : "Show"} All Users
</button>
</div>
<br />
{isVisible && (
<div className="people-container name">
<br />
<ul style={{listStyleType: "none"}}>
{people.map(person => (
<li key={person.id}>
<h5>{person.name}</h5>
{/* <h3>{person.email}</h3> */}
{/* <p>{blog.content}</p> */}
</li>
))}
</ul>
</div>
)}
</div>
);
}
export default People;