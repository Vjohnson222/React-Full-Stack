import "./App.css";
import React, { useState } from "react";

//No no this is the form for the Tasklist component, you need profiles
function Form({ tasks, updateTasks }) {
  const [formData, setFormData] = useState({ name: "", points: 0 });
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
    setFormData({ name: "", points: 0 });
  };

  
  return (
    <div className="container eyeContainer ">
      <div>
        <div className="row  formLabels">
          <div className="col-4">
            <br />
            <h6>Enter New Tasks</h6>
          </div>
          <div className="col-6">
            <br />
            <h6>Add PointValue</h6>
          </div>
        </div>
        <form
          className="form-group d-flex w-60"
          style={{ width: "60%" }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control  text-xs mx-2 input-height"
            type="text"
            name="name"
            required
            value={formData.name}
            style={{ width: "60%" }}  
            onChange={(e) =>
              setFormData({ name: e.target.value, points: formData.points })
            }
          />

          <input
            className="form-control w-25 p-1 text-xs mx-6 input-height"
            type="number"
            name="points"
            required
            value={formData.points}
            style={{ width: "20%" }}  
            onChange={(e) =>
              setFormData({
                name: formData.name,
                points: parseInt(e.target.value),
              })
            }
          />

<button
            type="submit"
            className="form-control p-1 text-xs mx-2 input-height"
            style={{ width: "calc(20% - 10px)", paddingTop: "0px"  }}
          >
            Submit
          </button>
        </form>
        <hr />
      </div>
    </div>
  );
}

export default Form;
