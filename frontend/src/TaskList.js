import "./App.css";
import React, { useState, useEffect } from "react";
import Delete from "./Delete";

function TaskList({ tasks, updateTasks }) {
  const [points, updatePoints] = useState(0);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", points: 0 });

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const countPoints = (searchIndex) => {
    let taskPoints = tasks[searchIndex].points;
    if (tasks[searchIndex].pointsAwarded === false) {
      tasks[searchIndex].points = formData.points; 
      tasks[searchIndex].pointsAwarded = true;
    } else {
      document.getElementById("task-button").disabled = true;
    }

    updatePoints(points + taskPoints);
    // let newTasks = tasks.filter((_, i) => i !== searchIndex);
    
  };

  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (event, index) => {
    setDraggedIndex(index);
    event.dataTransfer.setData("text", index);
  };
  // Code uses the spread operator
  // (...) to create a new array from the existing tasks array, and then removing
  // the task at the specified index using the splice() method

  // the spread operator allows iterations to be expanded in places where multiple elements or properties are expected.

  // When used in an array, the spread operator creates a new array that contains all the elements of the original array. For example:

  const handleDragOver = (index) => {
    if (index === draggedIndex) return;
    let newTasks = [...tasks];
    let draggedTask = newTasks.splice(draggedIndex, 1)[0];
    newTasks.splice(index, 0, draggedTask);
    updateTasks(newTasks);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setFormData(tasks[index]);
  };


  const handleEditSubmit = (event, index) => {
    event.preventDefault();
    let newTasks = [...tasks];
    newTasks[index].name = formData.name;
    newTasks[index].points = formData.points;
    updateTasks(newTasks);
    setEditIndex(null);
  };

  return (
    <div className="container2 TaskList ">
    
        <div className="row">
          <div className="col-6">
          
            <h6 className="formLabels">Drag and Drop to re-order Tasks</h6>
          </div>
          <div className="col-6">
            <br />
            <h6 className="formLabels" >Points Earned: {points}</h6>
          </div>
        </div>

        <ul style={{ listStyleType: "none" }}>
          {tasks.map((item, index) => (
            <li
              className="task"
              key={index}
              style={{ position: "relative", margin: "40px 40px" }}
            >
              <div
                className="handle"
                draggable
                onDragStart={(event) => handleDragStart(event, index)}
                onDragEnd={handleDragEnd}
                onDragOver={() => handleDragOver(index)}
              >
                <span className="content">{item.name}</span>

                <Delete tasks={tasks} updateTasks={updateTasks} index={index} />

                <button
                  className="DidIt-button but-height"
                  onClick={() => {
                    countPoints(index);
                  }}
                >
                  Did It!
                </button>
                <button
                  className="edit-button but-height"
                  onClick={() => handleEditClick(index)}
                >
                  Edit
                </button>
                <br />
                {editIndex === index && (
                  <form
                    className="form-group d-flex w-60"
                    style={{ width: "70%" }}
                    autoComplete="off"
                    onSubmit={(event) => handleEditSubmit(event, index)}
                  >
                    <input
                      className="form-control input-width mx-2 input-height"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={{ width: "250px", background:"transparent", display: "inline-block" }}
                    />
                    <input
            className="form-control input-width p-1 text-xs mx-2 input-height"
            type="number"
                      name="points"
                      required
                      value={formData.points}
                      onChange={(e) =>
                        setFormData({ ...formData, points: e.target.value })
                      }
                      style={{ width: "90px",background:"transparent", display: "inline-block" }}
                    />
                           <button
            type="submit"
            className="form-control p-1 text-xs mx-2 input-height"
            style={{ width: "10%",background:"transparent"}}
          >
            Save
          </button>
                  </form>
                )}
              </div>
            </li>
          ))}
        </ul>
      
    </div>
  );
}

export default TaskList;
