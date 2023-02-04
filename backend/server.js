// postgres://ownaeebr:diD7xGuoK_6jf4z_3gmuPe1_OIY3gyqk@stampy.db.elephantsql.com/ownaeebr
const express = require('express');
const app = express();
const PORT = 3001;
const db = require('./models');
const cors = require("cors")
//Check video for cors
app.use(cors())
app.use(express.json());
// app.use(express.static(__dirname + '/public'))



app.post("/people", (req, res) => {
  console.log("POST /people")

  const name = req.body.name;
  const email = req.body.email;

  // const { name, email } = req.body;

  if (!name || !email) {
    res.json({ error: "missing property name or email" });
    return;
  }
  
  db.person.create({ name: name, email: email}).then((result) => {
    console.log(result)
    res.json(result)
  })
  
})
app.get("/people", (req, res) => {
  console.log("GET /people")

  db.person.findAll({ attributes: ['id', 'name', 'email'] }).then((results) => {
    res.json(results)
  }).catch((e) => {
    console.log(e)
    res.json({ status: "error" })
  })

})

// app.patch("/people/:id/name", (req, res) => {
//   console.log("PATCH /people/:id/name")

//   const id = Number(req.params.id)

//   if (isNaN(id)) {
//     res.json({ error: " please note: id should be a number" })
//     return;
//   }

//   // const title = req.body.title;
//   const { name } = req.body;

//   if (!name) {
//     res.json({ error: "missing property title" });
//     return;
//   }

//   db.result(`UPDATE people SET name=$1 WHERE id=$2`, [name, id]).then((result) => {
//     console.log(result);
//     if (result.rowCount === 1) {
//       res.json({ status: "OK" })
//     } else {
//       res.json({ status: "error", message: `No people with id: ${id}` })
//     }
//   }).catch((e) => {
//     console.log(e)
//     res.json({ status: "error" })
//   })
// })

// app.delete("/people/:id", (req, res) => {
//   console.log("DELETE /people/:id")

//   const id = Number(req.params.id)

//   if (isNaN(id)) {
//     res.json({ error: "id should be a number" })
//     return;
//   }

//   db.people.destroy({ where: { id: id } }).then((result) => {
//     console.log(result);
//     if (result === 1) {
//       res.json({ status: "OK" })
//     } else {
//       res.json({ status: "error", message: `No people with id: ${id}` })
//     }
//   }).catch((e) => {
//     console.log(e)
//     res.json({ status: "error" })
//   })
// })

app.listen(PORT, (req, res) => {
  console.log(" app started at post 3000")
})

// http://localhost:3000/api/people