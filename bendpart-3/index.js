let express = require("express");
let path = require("path");

let app = express();
let port = 8080;


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

/* app.get("/",(req,res)=>{
    res.render("home.ejs")
})*/
/* app.get("/hello",(req,res)=>{
    res.send("hello world..!")
})*/

/* app.get("/rolldice",(req,res)=>{
    res.render("rolldice.ejs")
})*/

/* app.get("/rolldice",(req,res)=>{
    let dice = Math.floor(Math.random()*6)+1;
   res.render("rolldice.ejs",{dice})
})*/

/*app.get("/ig/:username",(req,res)=>{
    let {username} =req.params
    res.render("instagram.ejs",{username})
})*/


/* app.get("/rolldice",(req,res)=>{
    let dicevalue = Math.floor(Math.random()*6)+1;
res.render("rolldice.ejs",{dicevalue})
})*/

/* app.get("/ig/:username",(req,res)=>{
    let followers = ["rahul","soham","atul","bhushan"]
    let {username} =req.params
    res.render("instagram.ejs",{username,followers})
})*/

app.use(express.static(path.join(__dirname, "public")));
// link---- data.json - apna-college/Delta
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params
    const instaData = require("./data.json");
    const data =  instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs")
    }
})



app.listen(port,()=>{
console.log(`I am listening on port ${port}`)
})