import "./App.css";
import React, { useState } from "react";

function Extra() {
    const [funList, updateFunList] = useState([
      { id: 1, name: "12. Build a server with express so that it’s listening at localhost 3000" },
      { id: 2, name: "16. Next run the model migration", points: 20 },
      { id: 3, name: "3. In Be Keeper – Select:  Import From URL", points: 30 },
      { id: 4, name: "14. Build your Models with Sequelize", points: 40 },
      { id: 1, name: "4. Create a new folder on your device and name it accordingly", points: 10 },
      { id: 2, name: "8. Initialize Sequelize with Sequelize init – This creates the CLI", points: 20 },
      { id: 3, name: "10. Time to build a server", points: 30 },
      { id: 4, name: "19. Go into the migrations and update the nullable status to allowNull: false", points: 40 },
      { id: 1, name: "1. Create a DB – Go to Elephant SQL – Create a new Instance", points: 10 },
      { id: 2, name: "20. Declare your associations (if needed)", points: 20 },
      { id: 3, name: "5. Open that folder in your code editor", points: 30 },
      { id: 4, name: "11. Create a server.js file", points: 40 },
      { id: 1, name: "15.Here's an example: sequelize model:generate --name blog --attributes title:string, author:string", points: 10 },
      { id: 1, name: "19.Go into the migrations and updatethe nullable status to allowNull: false, author:string", points: 10 },
      { id: 3, name: "6. Next- npm init -y", points: 30 },
      { id: 4, name: "2. Grab the Database Link and head over to Beekeeper", points: 40 },
      { id: 4, name: "9. Update the config.json with the appropriate Database information", points: 40 },
      { id: 4, name: "17. Next !!!! Run the migration with ", points: 40 },
      { id: 4, name: "21. Create your first endpoint with a Get request", points: 40 },
      { id: 4, name: "13. Test it ", points: 40 },
      { id: 4, name: "7. Install the dependencies express Sequelize pg pg-hstore", points: 40 },


    ]);
    // const [points, updatePoints] = useState(0);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({ name: "", points: 0 });

  
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
      let newFun = [...funList];
      let draggedTask = newFun.splice(draggedIndex, 1)[0];
      newFun.splice(index, 0, draggedTask);
      updateFunList(newFun);
      setDraggedIndex(index);
    };
  
    const handleDragEnd = () => {
      setDraggedIndex(null);
    };
  
    const handleEditClick = (index) => {
      setEditIndex(index);
      setFormData(funList[index]);
    }
    const handleEditSubmit = (event, index) => {
        event.preventDefault();
        let newFun = [...funList]; 
        newFun[index] = formData;
        updateFunList(newFun); 
      };
    
  return (
    
    <div className="container4 Extra">
      <br />
                   <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <h5 style={{ color: "black"}}>Drag to Reorder The Steps Below for Proper Sequence</h5>
</div>


      <div>
        <div className="row">
          <div className="col-6">
            <br />
          </div>
          <div className="col-6">
            <br />
          </div>
        </div>

        <ul style={{ listStyleType: "none" }}>
        {funList.map((item, index) => ( 
       
<li className="task"
              key={index}
              style={{ position: "relative", margin: "20px 20px" }}
            >
              <div
                className="handle"
                draggable
                onDragStart={(event) => handleDragStart(event, index)}
                onDragEnd={handleDragEnd}
                onDragOver={() => handleDragOver(index)}
              >
                <span className="content">{item.name}</span>
                
                            <button
                  className="edit-button but-height"
                  onClick={() => handleEditClick(index)}
                type="submit" style={{ background: 'transparent', borderStyle: 'solid', borderColor: 'black', color: 'black', width: '70px', padding: '5px' }}>
                  Edit
                </button>
                {editIndex === index && (
               <form className="form-inline" style={{ display: "flex", alignItems: "center", backgroundColor: "transparent" }} onSubmit={(event) => handleEditSubmit(event, index)}>
               <input
                 className="form-control input-width mx-2 input-height"
                 type="text"
                 name="name"
                 value={formData.name}
                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                 style={{ width: "250px", background:"transparent",display: "inline-block", marginRight: 10 }}
               />
             
               <button
                 type="submit"
                 className="form-control p-1 text-xs mx-2 input-height"
                 style={{ width: "10%", background:"transparent" }}
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
    </div>
  );
}

export default Extra;



