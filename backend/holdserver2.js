//This is showing upFROM my database and it's talking toreact showing through to React
const express = require('express');
const app = express();
const PORT = 3005;
const db = require('./models');
const cors = require("cors")

app.use(cors())
app.use(express.json());
app.use(express.static(__dirname + '/public'));


app.post("/blogs", (req, res) => {
    console.log("POST /blogs")
  
    // const title = req.body.title;
    const { title, author } = req.body;

    if (!title || !author) {
      res.json({ error: "missing property title or author" });
      return;
    }
    
    db.blog.create({ title: title, author: author}).then((result) => {
      console.log(result)
      res.json(result)
    })
    
  })
  
  app.get("/blogs", (req, res) => {
    console.log("GET /blogs")
  
    db.blog.findAll({ attributes: ['id', 'title', 'author'] }).then((blogs) => {
      res.json(blogs)
    }).catch((e) => {
      console.log(e)
      res.json({ status: "error" })
    })
  
  })

  app.patch("/blogs/:id/title", (req, res) => {
    console.log("PATCH /blogs/:id/title")
  
    const id = Number(req.params.id)
  
    if (isNaN(id)) {
      res.json({ error: " please note: id should be a number" })
      return;
    }
  
    // const title = req.body.title;
    const { title } = req.body;
  
    if (!title) {
      res.json({ error: "missing property title" });
      return;
    }
  
    db.result(`UPDATE blogs SET title=$1 WHERE id=$2`, [title, id]).then((result) => {
      console.log(result);
      if (result.rowCount === 1) {
        res.json({ status: "OK" })
      } else {
        res.json({ status: "error", message: `No blogs with id: ${id}` })
      }
    }).catch((e) => {
      console.log(e)
      res.json({ status: "error" })
    })
  })

  app.delete("/blogs/:id", (req, res) => {
    console.log("DELETE /blogs/:id")
  
    const id = Number(req.params.id)
  
    if (isNaN(id)) {
      res.json({ error: "id should be a number" })
      return;
    }
  
    db.blog.destroy({ where: { id: id } }).then((result) => {
      console.log(result);
      if (result === 1) {
        res.json({ status: "OK" })
      } else {
        res.json({ status: "error", message: `No blogs with id: ${id}` })
      }
    }).catch((e) => {
      console.log(e)
      res.json({ status: "error" })
    })
  })


app.listen(PORT, (req, res) => {
    console.log(" app started at post 3000")
  })

// http://localhost:3000/api/blogs