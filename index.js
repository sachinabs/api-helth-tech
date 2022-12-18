const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());


const User = require("./config/config");
const { pool } = require("./config/sql-config")
const controllers = require("./controllers/base.controller")



app.get("/", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/test", function (req, res) {
  res.send(req.body)
})

app.post("/create", async (req, res) => {
  const data = req.body;
  await User.add({ data });
  res.send({ msg: "User Added" });
});

app.post("/update", async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  await User.doc(id).update(data);
  res.send({ msg: "Updated" });
});

app.post("/delete", async (req, res) => {
  const id = req.body.id;
  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
});




// http://localhost:9000/api/sql/singleUser/A-103 -- single user
// http://localhost:9000/api/sql/getAllUser -- all user
// http://localhost:9000/api/sql/getRobo/R001 -- single robo params


// sql api
app.get("/api/sql/getAllUser", controllers.getAllUser)
app.get("/api/sql/singleUser/:id", controllers.getSingleUser)
app.get("/api/sql/getRobo/:id", controllers.getRoboDetails)
app.post("/api/sql/updateRoboParam", controllers.updateRoboParam)





//To mysql server 

const port = process.env.PORT || 9000

app.listen(9000, () => {

  console.log(`📌 Server is Running on Port { ${port} }`)

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('📌 Mysql DataBase Connected...');
  })

});
