import React, { useState, useEffect } from "react";
import TaskList from './TaskList';

import Form from './Form';
import People from "./People";
//Leave this here to use as a future button Part1
// import Sequences from "./Sequences";


function App() {
  //We brought this here after pulling out the form to create it's own component
  //when the newly created Form component was challenged with "tasks not defined"
  //Now both TaskList.js and Form.js have access to it
  const [tasks, updateTasks] = useState([
    { id: 1, name: "1. Register for Fall classes", points: 10, pointsAwarded: false  },
    { id: 2, name: "2. Apply for Financial Aid", points: 20, pointsAwarded: false  },
    { id: 3, name: "3. Study the course content", points: 30, pointsAwarded: false  },
    { id: 4, name: "4. Complete and submit Assignments", points: 40, pointsAwarded: false  },
  ]);


  //useEffect allows you to apply side-effects like fetching data
  useEffect(() => {
    fetch("http://localhost:3001/api/people")
      .then(res => res.json())
      .then(data => (data));
  }, []);


  //Leave this here to use as a future button Part2
  // const [isVisible, setIsVisible] = useState(false);

  //Leave this here to use as a future button Part3
  // const toggleVisibility = () => { setIsVisible(!isVisible); }



  
    // fix this 

    // return (
    //   <div className="App">
    //     <h1>Persons List Posts</h1>
    //     <ul>
    //       {people.map(person => (
    //         <li key={person.id}>
    //           <h2>{person.name}</h2>
    //           <h3>{person.email}</h3>
    //           
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // );
  
  return (
    

    
    <div>
      {/* //Leave this here to use as a future button Part1
      <button onClick={toggleVisibility} className="no-border transparent-bg white-text"> Sequencer</button>
    {isVisible && <Sequences className="no-border transparent-bg white-text"/>} */}

      <Form tasks={tasks} updateTasks={updateTasks} /> 
      <TaskList tasks={tasks} updateTasks={updateTasks}  />   
       </div>
  );
}

export default App;