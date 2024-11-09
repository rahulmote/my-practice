let express = require("express");
let { v4: uuidv4 } = require('uuid');
let app = express();
let port = 8080;
let path = require("path");
let methodOverride = require("method-override")
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
    ;
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
let posts = [{
    id:uuidv4(),
    username: "rahul mote",
    content: "i am doing the practice of web development"
},
{
    id:uuidv4(),
    username: "patil",
    content: "hardwork is important to achive the success..!"
}, {
    id:uuidv4(),
    username: "apna college",
    content: "this is a channel"
}]

app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts})
})
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})
app.post("/posts", (req,res) => {
    let {username,content}=req.body;
    let id = uuidv4()
    posts.push({id,username,content})
    res.redirect("/posts")
})
app.get("/posts/:id",(req,res) => {
    let {id} = req.params; 
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{post});
})
app.patch("/posts/:id",(req,res) => {
    let {id} = req.params; 
    let newContent = req.body.content;
    post.content =newContent;
    console.log(post);
    res.redirect("/posts");
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post =posts.find((p)=> id ===p.id)
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
     posts =posts.filter((p)=> id !==p.id)
    res.redirect("/posts")
})
app.listen(port, () => {
    console.log(`app is listening  on port ${port}`);
})