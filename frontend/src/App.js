import React, { useState, useEffect } from "react";
import TaskList from './TaskList';
import Form from './Form';


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

  
  return (
    
    <div>
      <Form tasks={tasks} updateTasks={updateTasks} /> 
      <TaskList tasks={tasks} updateTasks={updateTasks}  />   
       </div>
  );
}

export default App;