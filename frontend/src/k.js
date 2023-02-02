// // useEffect is a hook in React, which allows you to perform side effects in functional components. It runs a specified function, called an "effect", after every render of the component.

// // Here is a simple example of how useEffect works:

// // javascript
// // Copy code
// import React, { useState, useEffect } from "react";

// function Example() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }
// // In this example, the useEffect hook updates the document's title every time the component re-renders, which occurs when the count state changes. The useEffect hook takes a function as its first argument, which will run after every render of the component, and an optional second argument, an array of values that determines when the effect should run.

// // how does this code work . import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// // This code imports various components from the react-router-dom library, which provides routing functionality for React applications.

// // Here's a brief explanation of each component:

// // BrowserRouter as Router: This is a higher-order component that provides the routing functionality to your application. It wraps your application and manages the navigation and URL updates.

// // Routes: This component defines a set of routes in your application. It renders the first Route component that matches the current URL.

// // Route: This component is used to define a single route in your application. It takes two important props: path and element. The path prop defines the URL pattern that the route should match, and the element prop defines what should be rendered for that route.

// // Link: This component is used to navigate to different routes in your application. When a user clicks on a Link, the URL updates, and the corresponding Route component renders the desired content.

// // Here is a simple example of how these components can be used together:

// // javascript
// // Copy code
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function App() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="about">About</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// // In this example, the Router component wraps the entire application and provides routing functionality. The Routes component defines two routes, each defined using a Route component. The Link components are used to navigate between the routes. When the URL matches a specific Route's path, the corresponding component will be rendered.

// // How does this code work.

// function Delete({ tasks, updateTasks, index }) {
//   const deleteTask = (searchIndex) => {
//     let newTasks = tasks.filter((_, i) => i !== searchIndex);
//     updateTasks(newTasks);
//   };

//   return (
//     <div className="container2 TaskList">
//       <button
//         className="delete-button but-height"
//         onClick={() => {
//           deleteTask(index);
//         }}
//       >
//         Delete{" "}
//       </button>
//     </div>
//   );
// }
// //   This code defines a React functional component named Delete. The component receives three props: tasks, updateTasks, and index.

// //   tasks is an array of task objects.
// //   updateTasks is a function that updates the tasks state.
// //   index is the index of the task that is going to be deleted.
// //   The component contains a deleteTask function, which is used to delete a task from the tasks array. It uses the filter method to create a new array newTasks that does not include the task at the specified index. Then, it calls the updateTasks function with the newTasks array as its argument to update the tasks state.

// //   Finally, the component returns a div element that contains a button element. The button has an onClick handler that calls the deleteTask function and passes index as its argument when the button is clicked.

// //   When the delete button is clicked, the task at the specified index is deleted from the tasks array, and the tasks state is updated using the updateTasks function.

// // How does this code work
// function Extra() {
//   const [funList, updateFunList] = useState([
//     {
//       id: 1,
//       name: "12. Build a server with express so that it’s listening at localhost 3000",
//     },
//     { id: 2, name: "16. Next run the model migration", points: 20 },
//   ]);
// }
// // This code defines a React functional component named Extra. The component uses the useState hook to initialize a state variable named funList with an array of objects. Each object represents a task and has an id and a name property.

// // The useState hook returns an array with two elements, the current state and a state update function. We destructured this array into two variables, funList and updateFunList.

// // funList holds the current state, which is the array of task objects.

// // updateFunList is a function that updates the funList state. When the function is called with a new array as its argument, the state updates and causes the component to re-render with the updated data.

// // Note that this component does not have any code that renders the task list to the screen.

// // What does this code do
// const [editIndex, setEditIndex] = useState(null);
// const [formData, setFormData] = useState({ name: "", points: 0 });
// const [draggedIndex, setDraggedIndex] = useState(null);

// // This code is written in React and it declares three state variables in a functional component.

// // editIndex is set to null using useState(null), which returns an array containing the current state value (editIndex) and a function to update the state (setEditIndex).
// // formData is set to an object { name: "", points: 0 } using useState({ name: "", points: 0 }), which returns an array containing the current state value (formData) and a function to update the state (setFormData).
// // draggedIndex is set to null using useState(null), which returns an array containing the current state value (draggedIndex) and a function to update the state (setDraggedIndex).
// // These state variables can be used within the component to store dynamic values that can change over time.

// // How does this code work
// const handleDragStart = (event, index) => {
//   setDraggedIndex(index);
//   event.dataTransfer.setData("text", index);
// };

// //       This code is a React function component handleDragStart that is used to handle the drag start event.

// // When handleDragStart is called, it takes two parameters:

// // event: an event object that represents the drag start event.
// // index: the index of the item being dragged.
// // The function does two things:

// // It sets the draggedIndex state to the index of the item being dragged by calling setDraggedIndex(index).
// // It sets the data that is being dragged by calling event.dataTransfer.setData("text", index). The dataTransfer object is a property of the event object, and setData is a method that sets the data to be transferred. In this case, the data type is "text" and the value is the index.
// // This code is used to store the index of the item being dragged, so that it can be accessed later to reorder the list of items.

// // The next code uses the spread operator

// // Code uses the spread operator
// // (...) to create a new array from the existing tasks array, and then removing
// // the task at the specified index using the splice() method

// // the spread operator allows iterations to be expanded in places where multiple elements or properties are expected.

// // When used in an array, the spread operator creates a new array that contains all the elements of the original array. For example:

// // Explain how this code ServiceWorkerRegistration
// const handleDragOver = (index) => {
//   if (index === draggedIndex) return;
//   let newFun = [...funList];
//   let draggedTask = newFun.splice(draggedIndex, 1)[0];
//   newFun.splice(index, 0, draggedTask);
//   updateFunList(newFun);
//   setDraggedIndex(index);
// };
// //   The code defines a function handleDragOver that updates the order of elements in an array funList. The function takes in an index argument which is the new index where the element is being moved to. The function checks if the new index is the same as the draggedIndex, if it is, the function returns and doesn't do anything.

// //   If the new index is not the same as the draggedIndex, the function creates a new array newFun as a copy of funList using the spread operator .... It then removes the element at the draggedIndex from newFun using splice and stores it in a variable draggedTask. The removed element is then inserted back into newFun at the new index using splice. The updated newFun is then passed to the function updateFunList which is assumed to update the state of the component. Finally, the setDraggedIndex function is called and it updates the draggedIndex state with the new index.


// // what does this code do  
// const handleDragEnd = () => {
//     setDraggedIndex(null);
//   };

// //   The code defines a function handleDragEnd that resets the draggedIndex state to null. The function is called when the drag and drop operation has ended, and it is used to clear the state that keeps track of the index of the item that was being dragged. This is typically used to update the UI to indicate that the dragging operation has ended and to clean up any temporary state that was being used for the drag and drop operation.

// // what does this code do. 

// const handleEditClick = (index) => {
//     setEditIndex(index);
//     setFormData(funList[index]);
//   }

// //   The code defines a function handleEditClick that updates the UI to display a form for editing an item in an array funList. The function takes in an index argument which is the index of the item in funList that needs to be edited.

// // The function first sets the editIndex state to the index passed as an argument. This is used to keep track of the index of the item that is being edited.

// // Next, the function sets the formData state to the data of the item in funList at the index passed as an argument. This is used to populate the form with the data of the item that is being edited. The setFormData function is assumed to update the state of the component with the new data.

// // So, in summary, the function handleEditClick is used to initiate the process of editing an item in funList by updating the UI to display a form with the data of the item to be edited.

// // How does this code work 
// const handleEditSubmit = (event, index) => {
//     event.preventDefault();
//     let newFun = [...funList]; 
//     newFun[index] = formData;
//     updateFunList(newFun); 
//   };

// //   The code defines a function handleEditSubmit that updates the data of an item in an array funList and submits the changes. The function takes in two arguments, event and index. The event argument is typically a form submit event, and index is the index of the item in funList that needs to be updated.

// // The function first calls event.preventDefault() to prevent the default behavior of the form submit event.

// // Next, the function creates a new array newFun as a copy of funList using the spread operator .... It then updates the data of the item in newFun at the index passed as an argument with the data in formData state.

// // Finally, the updated newFun is passed to the updateFunList function which is assumed to update the state of the component with the new data.

// // So, in summary, the function handleEditSubmit updates the data of an item in funList when the form for editing is submitted, and it calls the updateFunList function to update the component state with the new data.

// // Explain how this works 
// <div className="row">
// <div className="col-6">
//   <br />
// </div>
// <div className="col-6">
//   <br />
// </div>
// </div>

// // The code defines a row of two columns in HTML using Bootstrap, a popular CSS framework.

// // The <div className="row"> is the container for the two columns and it creates a row in which to place two columns. The className attribute defines the CSS class that is applied to the element.

// // The first column is defined as <div className="col-6">, and it is given a width of 6 out of 12 columns in the grid system of Bootstrap. The col-6 class indicates that the column should occupy half of the width of the parent row. The <br /> element creates a line break and adds some vertical space after the column.

// // The second column is defined in a similar manner as the first column, with the same class col-6, and it is placed next to the first column in the same row.

// // So, in summary, the code creates a row with two columns of equal width using the Bootstrap framework. The two columns are separated by a line break to add some vertical space.

// // How does this work 

// // {funList.map((item, index) => (  
// //     This is a JavaScript expression that uses the map method of the funList array. The map method creates a new array by applying a function to each element in the original array.

// // The function passed to map takes in two arguments, item and index. item is the current element of the array being processed, and index is the index of that element in the array.

// // The function returns a value, which is then added to the new array created by the map method. The returned value can be any JavaScript expression, including JSX elements, as long as it returns a single value.

// // So, in summary, the code uses the map method of the funList array to create a new array by applying a function to each element of funList and returning a value for each element. The returned values can be used to render a list of items in the UI, for example.


// // Big return. what does this code do 
// {/* <ul style={{ listStyleType: "none" }}>
// {funList.map((item, index) => ( 

// <li className="task"
//       key={index}
//       style={{ position: "relative", margin: "20px 20px" }}
//     >
//       <div
//         className="handle"
//         draggable
//         onDragStart={(event) => handleDragStart(event, index)}
//         onDragEnd={handleDragEnd}
//         onDragOver={() => handleDragOver(index)}
//       >
//         <span className="content">{item.name}</span>
        
//                     <button
//           className="edit-button but-height"
//           onClick={() => handleEditClick(index)}
//         type="submit" style={{ background: 'transparent', borderStyle: 'solid', borderColor: 'black', color: 'black', width: '70px', padding: '5px' }}>
//           Edit
//         </button>
//         {editIndex === index && (
//        <form className="form-inline" style={{ display: "flex", alignItems: "center", backgroundColor: "transparent" }} onSubmit={(event) => handleEditSubmit(event, index)}>
//        <input
//          className="form-control input-width mx-2 input-height"
//          type="text"
//          name="name"
//          value={formData.name}
//          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//          style={{ width: "250px", background:"transparent",display: "inline-block", marginRight: 10 }}
//        />
     
//        <button
//          type="submit"
//          className="form-control p-1 text-xs mx-2 input-height"
//          style={{ width: "10%", background:"transparent" }}
//        >
//          Save
//        </button>
//      </form>
     
     
//         )}
//       </div>
//     </li>
//   ))}
// </ul> */}


// // Here it is 
// // This code is rendering a list of items in the UI using React and JSX. The code uses the funList array as the data source for the list.

// // The code starts by rendering an unordered list <ul> with a specific listStyleType of "none".

// // Then, the code uses the map method of the funList array to render each item in the list. The map method creates a new array by applying a function to each element in the original array.

// // The function passed to map takes in two arguments, item and index. item is the current element of the array being processed, and index is the index of that element in the array.

// // For each item in the funList array, the code renders a <li> element with the class "task" and a specific style. The <li> element contains a <div> element that represents a task. This <div> element has a className of "handle" and is set as draggable. It also has several event handlers:

// // onDragStart: This event handler is called when the user starts dragging the <div> element. It calls the handleDragStart function and passes the event object and the index of the item in the funList array as arguments.
// // onDragEnd: This event handler is called when the user stops dragging the <div> element. It calls the handleDragEnd function.
// // onDragOver: This event handler is called when the user drags the <div> element over another element. It calls the handleDragOver function and passes the index of the item in the funList array as an argument.
// // The code also renders a <span> element with the class "content" that displays the name of the task. It also renders a <button> element with the class "edit-button" and the onClick event handler that calls the handleEditClick function and passes the index of the item in the funList array as an argument.

// // Additionally, the code uses a conditional render to display an edit form when the editIndex is equal to the index of the item in the funList array. The form contains two input fields and a save button. The form also has a onSubmit event handler that calls the handleEditSubmit function and passes the event object and the index of the item in the funList array as arguments.

// // So, in summary, the code is rendering a list of tasks with a handle for dragging, a button for editing, and a form for editing the task's name.

// // How does this component work 

// import React from 'react';


// const Eye = () => {

//   const h1Style = { 
//   display: 'inline-block', 
//   fontFamily: 'Great Vibes, cursive',
//   textAlign: 'center',
//   fontSize: '70px',
//   fontWeight: 'bold',
//   marginLeft: '120px', 
//   marginTop: '80px'
  
// };

//   const divStyle = { display: 'inline-block' };
//   return (
//     <div className="eyeContainer">
      
//       <br /><br /><br />
//       <h1 style={h1Style}><p>Stay Focussed</p>Keep your Eye on the Prize</h1>

//       {/* <div className="eye-outer" style={divStyle}>
//         <div className="eye-inner">
//           <div className="inner-circle"></div>
//         </div>
//       </div> */}
      
//     </div>
//   );
// }

// // export default Eye;

// // This component is a stateless functional component in React that renders an eye illustration. The component defines two styles, h1Style and divStyle, which are used to style the header text and the eye illustration respectively. The component returns a div with a header element displaying text and a comment section explaining the eye illustration.

// // How does this code Worker. 

// // function Form({ tasks, updateTasks }) {
// //     const [formData, setFormData] = useState({ name: "", points: 0 });

// // The code is a functional component named "Form" in React that takes in two props, "tasks" and "updateTasks".

// // The component uses the React hook "useState" to initialize a state variable "formData" with an object that contains two properties, "name" and "points". The state variable is used to keep track of the form data input by the user. The "setFormData" is the state setter function that can be used to update the formData state variable.


// // What does this code do 

// const handleSubmit = (event) => {
//     event.preventDefault();
//     let newTasks = [...tasks, formData];
//     updateTasks(newTasks);
//     setFormData({ name: "", points: 0 });
//   };

// //   This code handles the submit action of a form. When the form is submitted, it first prevents the default form submission behavior with event.preventDefault().

// // Then it creates a new array newTasks which is a copy of the tasks array with the newly added form data (formData).

// // Finally, it updates the state of tasks with updateTasks(newTasks) and resets the form data back to an empty state setFormData({ name: "", points: 0 }).

// // How does this Worker. 
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
  </div></div>

// This component is used to display two labels for two inputs. The layout is created using Bootstrap's grid system, which divides the screen into rows and columns to create a grid of content. In this case, the first sub-container is taking up 4 columns, and the second sub-container is taking up 6 columns, within a 12-column grid.

// What is this code doing



{/* <div className="container eyeContainer ">
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

 */}


//  This is HTML code using JSX syntax that creates a form for adding new tasks with a name and a point value. The code includes a submit button. The input values are stored in the formData state and are updated as the user enters data into the form. The handleSubmit function is triggered when the form is submitted, and it adds the new task to the existing tasks and updates the tasks list by calling updateTasks function.