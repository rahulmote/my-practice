const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'rahulmote9921'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// iNDEX ROUTE
app.get("/", (req, res) => {
  let q = `SELECT  count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    })
  } catch (err) {
    console.log(err);
    res.send("Some error n DB");
  }
});

// SHOW ROUTS
app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      // res.send(result)
      res.render("showusers.ejs", { users });

    })
  } catch (err) {
    console.log(err);
    res.send("Some error n DB");
  }
});

// EDiT ROUTE
app.get("/user/:id/edit", (req,res) =>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      console.log(result);
      res.render("edit.ejs",{user});
    })
  } catch (err) {
    console.log(err);
    res.send("Some error n DB");
  }
});

// UPDATE [DB] ROUTE 

app.patch("/user/:id", (req, res) =>{
  let {id} = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q,(err, result) =>{
      if(err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("wrong password");
      }
      else{
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id= '${id}'`;
        connection.query(q2, (err, result) =>{
          if(err) throw err;
          // res.send(result)
          res.redirect("/user");
          })
          }
          // res.send(user)
    })
  } catch(err){
    console.log(err);
    res.send("some error n DB");
    
  }
})

// homework

app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  //Query to Insert New User
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("added new user");
      res.redirect("/user");
    });
  } catch (err) {
    res.send("some error occurred");
  }
});

app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});




app.listen("8080", () => {
    console.log("server listening to port 8080 ");
  
  });
