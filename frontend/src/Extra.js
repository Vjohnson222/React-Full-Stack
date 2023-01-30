import "./App.css";
import React, { useState } from "react";

function Extra() {
    const [funList, updateFunList] = useState([
      { id: 1, name: "12. build a server with express so that it’s listen at local hist 3000", points: 10 },
      { id: 2, name: "16. Next run the model migration", points: 20 },
      { id: 3, name: "3. In Be Keeper – Select:  Import From URL", points: 30 },
      { id: 4, name: "14. Build your models with Sequelize", points: 40 },
      { id: 1, name: "4. Create a new folder on your device and name it accordingly", points: 10 },
      { id: 2, name: "8. Initialize Sequelize with Sequelize init – This creates the CLI", points: 20 },
      { id: 3, name: "10. Time to build a server", points: 30 },
      { id: 4, name: "19. Go into the migrations and update the nullable status to allowNull: false,", points: 40 },
      { id: 1, name: "1. Create a DB – Elephant SQL – Create a new Instance", points: 10 },
      { id: 2, name: "20. Declare your associations", points: 20 },
      { id: 3, name: "5. Open that folder in your code editor", points: 30 },
      { id: 4, name: "11. Create a server.js file", points: 40 },
      { id: 1, name: "15.Try this for an example sequelize model:generate --name blog --attributes title:string, author:string", points: 10 },
      { id: 1, name: "19.Go into the migrations and updatethe nullable status to allowNull: false, author:string", points: 10 },
      { id: 3, name: "6. Next npm init -y", points: 30 },
      { id: 4, name: "2. Grab the Database Link and head over to Beekeeper", points: 40 },
      { id: 4, name: "	9. Update the config.json with the appropriate Database information", points: 40 },
      { id: 4, name: "17. Next !!!! Run the migration with ", points: 40 },
      { id: 4, name: "	21. Create your first end point with a Getrequest", points: 40 },
      { id: 4, name: "13. Test it ", points: 40 },

      { id: 4, name: "7. Install the dependencies express Sequelize pg pg-hstore", points: 40 },


    ]);
    // const [points, updatePoints] = useState(0);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({ name: "", points: 0 });
    // const [hasDeliveredPoints, setHasDeliveredPoints] = useState(false);
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   let newFun = funList.concat([formData]);
    //   updateFunList(newFun);
    //   setFormData({name: "", points: 0});
    // }
  
    //Right Here Delete attempt1
    // const deleteTask = (searchIndex) => {
    //   let newFun = funList.filter((_, i) => i !== searchIndex);
    //   updateFunList(newFun);
    // };
  
    // const countPoints = (searchIndex) => {
    //   let taskPoints = funList[searchIndex].points;
    //   if (funList[searchIndex].pointsAwarded === false) {
    //     // award points and update property to true
    //     funList[searchIndex].pointsAwarded = true;
    //     updatePoints(points + taskPoints);
    //   } else {
    //     // prevent points from being awarded again
    //     alert(".........GREAT JOB!!!! ................. 🥳 ............  POINTS EARNED 🎉.......................  NOW GO DO SOMETHING ELSE 🥂.");
    //   }
    // };
    //
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
        let newFun = [...funList]; //fix here
        newFun[index] = formData;
        updateFunList(newFun); //fix here
        setEditIndex(null);
      };
    
  return (
    
    <div className="container4 Extra">
      <br />
                   <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <h5 style={{ color: "black"}}>Reorder The Steps Below for Proper Sequence</h5>
</div>


      <div>
        <div className="row">
          <div className="col-6">
            <br />
            {/* <h5>Drag and Drop to re-order Fun</h5> */}
          </div>
          <div className="col-6">
            <br />
            {/* <h5>Points Earned: {points}</h5> */}
          </div>
        </div>

        <ul style={{ listStyleType: "none" }}>
        {funList.map((item, index) => ( // fix here
        // Stling is added here 
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
                
                {/* //Right Here Delete attempt2 */}

                {/* <button
                  className="delete-button but-height"
                  onClick={() => {
                    deleteTask(index);
                  }}> Delete </button> */}
{/* <Delete fun={fun} updateFun={updateFun} index={index} /> */}

                {/* <button
                  className="DidIt-button but-height"
                  onClick={() => {
                    countPoints(index);
                  }}
                >
                  Did It!
                </button> */}
                <button
                  className="edit-button but-height"
                  onClick={() => handleEditClick(index)}
                type="submit" style={{ background: 'transparent', borderStyle: 'solid', borderColor: 'black', color: 'black', width: '70px', padding: '5px' }}>
                  Edit
                </button>
                {editIndex === index && (
                 <form className="form-inline" onSubmit={(event) => handleEditSubmit(event, index)}>
                 <input
                     className="form-control input-width mx-2 input-height"
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     style={{ width: "250px", display: "inline-block"}}
                 />
                 {/* <input
                     className="form-control input-width input-height"
                     type="number"
                     name="points"
                     value={formData.points}
                     onChange={(e) => setFormData({ ...formData, points: e.target.value })}
                     style={{ width: "90px", display: "inline-block"}}
                 /> */}
                 <input type="submit" className="btn btn-sp2 input-height" value="Save" style={{ display: "inline-block"}} />
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



