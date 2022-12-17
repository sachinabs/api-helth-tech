const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());
const mysql = require('mysql');
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


const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "helthtec"
});

//To mysql server 
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log('connected to DB');
})

// http://localhost:9000/api/sql/singleUser/A-103 -- single user
// http://localhost:9000/api/sql/getAllUser -- all user
// http://localhost:9000/api/sql/getRobo/R001 -- single robo params

app.get("/api/sql/getAllUser", async (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query('SELECT * from all_user_list', (err, rows) => {
      connection.release();
      if (!err) {
        console.log(rows);
        res.json(rows)
      } else {
        console.log(err);
      }

    });
  });
});


app.get("/api/sql/singleUser/:id", async (req, res) => {
  // console.log(req.params.id);
  // const query = `SELECT * FROM user_list WHERE p_id='${req.params.id}'  `
  // console.log(query);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`SELECT * from all_user_list WHERE p_id = '${req.params.id}' `, (err, rows) => {
      connection.release();
      if (!err) {

        console.log(rows);
        res.json(rows)
      } else {
        console.log(err);
      }

    });
  });
});

app.get("/api/sql/getRobo/:id", async (req, res) => {
  // console.log(req.params.id);
  // const query = `SELECT * FROM user_list WHERE p_id='${req.params.id}'  `
  // console.log(query);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`SELECT * from robo_params WHERE robo_id = '${req.params.id}' `, (err, rows) => {
      connection.release();
      if (!err) {

        console.log(rows);
        res.json(rows)
      } else {
        console.log(err);
      }

    });
  });
});

app.get("/api/sql/changeParams/", async (req, res) => {
  // console.log(req.params.id);
  const query = `INSERT INTO  updated_robo_params (d_id, scan_type, gain, zoom_level, system_mode, depth, x,y,robo_id,s_num) VALUES
   ('${req.query.d_id}','${req.query.scan_type}','${req.query.gain}','${req.query.zoom_level}','${req.query.system_mode}',
   '${req.query.depth}','${req.query.x}','${req.query.y},'${req.query.robo_id}','${req.query.s_num}'') `
  console.log(query);
  // const value = req.query.id
  // console.log(value);

  // pool.getConnection((err, connection) => {
  //   if (err) throw err;
  //   connection.query(`SELECT * from robo_params WHERE robo_id = '${req.params.id}' `, (err, rows) => {
  //     connection.release();
  //     if (!err) {

  //       console.log(rows);

  //     } else {
  //       console.log(err);
  //     }

  //   });
  // });
});



app.listen(9000, () => console.log("Up & RUnning *9000"));
