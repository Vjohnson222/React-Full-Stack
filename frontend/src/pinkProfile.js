import './App.css';
import React, { useState } from 'react';
// import Sequence from './Sequences';

function Form({tasks, updateTasks}) {
   
  const [formData, setFormData] = useState({name: "", points: 0});
  // const [isVisible, setIsVisible] = useState(false);



  // Code uses the spread operator  
  // (...) to create a new array from the existing tasks array, and then removing 
  // the task at the specified index using the splice() method


  // the spread operator allows iterations to be expanded in places where multiple elements or properties are expected.

// When used in an array, the spread operator creates a new array that contains all the elements of the original array. For example:
 
  const handleSubmit = (event) => {
    event.preventDefault();
    let newTasks = [...tasks, formData];
    updateTasks(newTasks);
    setFormData({name: "", points: 0});
  }

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // }

  return (
    
    <div className="container Form">
       {/* <button onClick={toggleVisibility} className="no-border transparent-bg white-text"> Sequencer</button>
    {isVisible && <Sequence className="no-border transparent-bg white-text"/>} */}

      <div>
         <div className="row">
          <div className="col-6">
            <br />
            <h5>Enter New Tasks</h5>
          </div>
          <div className="col-6">
            <br />
            <h5>Enter PointValue</h5>
          </div>
        </div>
      <form className="form-group d-flex" autoComplete="off" onSubmit={handleSubmit}>
          <input
            className="form-control w-50 p-1 text-xs mx-2 input-height"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ name: e.target.value, points: formData.points })}
          />

          <input
            className="form-control w-25 p-1 text-xs mx-6 input-height"
            type="number"
            name="points"
            required
            value={formData.points}
            onChange={(e) =>
              setFormData({ name: formData.name, points: parseInt(e.target.value) 
              })
            }
          />

          <input
            type="submit"
            className="submit-button btn btn-sp2 mx-2 input-height"
            value="Submit"
          />
        </form>
       
 </div>
      </div>
      
  )
}

export default Form;
