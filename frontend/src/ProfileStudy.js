johnsonbpo@yahoo.com
how can I make the <Profile/> component visible with a button click import './App.css';
import React, { useState } from 'react';
import Profile from './Profile';

function Form({tasks, updateTasks}) {
   
  const [formData, setFormData] = useState({name: "", points: 0});

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTasks = [...tasks, formData];
    updateTasks(newTasks);
    setFormData({name: "", points: 0});
  }

  return (
    <div className="container Form">
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
      <form className="form-group d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control w-50 p-1 text-xs mx-2 input-height"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ name: e.target.value, points: formData.points })}
          />

          <input
            className="form-control w-25 p-1 text-xs mx-6 input-height"
            type="number"
            name="points"
            value={formData.points}
            onChange={(e) =>
              setFormData({ name: formData.name, points: e.target.value })
            }
          />

          <input
            type="submit"
            className="submit-button btn btn-sp2 mx-2 input-height"
            value="Submit"
          />
        </form>
 </div>
 <Profile/> 
      </div>
      
  )
}

export default Form;

To make the <Profile/> component visible with a button click, you can use a state variable to keep track of whether the component should be visible or not, and toggle its visibility based on the button click.

One way to do this is to create a state variable called "isVisible" with an initial value of "false", and a function to toggle its value when the button is clicked.
You can then use the value of "isVisible" to conditionally render the <Profile/> component.

Here's an example of how you can modify your code to do this:

Copy code
import './App.css';
import React, { useState } from 'react';
import Profile from './Profile';

function Form({tasks, updateTasks}) {
   
  const [formData, setFormData] = useState({name: "", points: 0});
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTasks = [...tasks, formData];
    updateTasks(newTasks);
    setFormData({name: "", points: 0});
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className="container Form">
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
      <form className="form-group d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control w-50 p-1 text-xs mx-2 input-height"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ name: e.target.value, points: formData.points })}
          />

          <input
            className="form-control w-25 p-1 text-xs mx-6 input-height"
            type="number"
            name="points"
            value={formData.points}
            onChange={(e) =>
              setFormData({ name: formData.name, points: e.target.value })
            }
          />

          <input
            type="submit"
            className="submit-button btn btn-sp2 mx-2 input-height"
            value="Submit"
          />
        </form>
         <button onClick={toggleVisibility}> Show Profile</button>
         {isVisible && <Profile/>}
 </div>
      </div>
      
  )
}

export default Form;
Here, you added a button with the text "Show Profile" and an onClick function that toggles the isVisible state.
And then, you added a ternary operator that checks whether isVisible state is true or false, if it is true it will render the <Profile/> component otherwise it will not.