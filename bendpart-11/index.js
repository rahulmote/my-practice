let express = require("express");
let app = express();
let mongoose = require("mongoose");
let path = require("path");
const methodOverride = require("method-override");

                    //   give structure from other file and insert data 
let Chat = require("/Users/Admin/Desktop/backend/bendpart-10/models/chat.js");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

                        //    use for connect mongoDB to js
main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
        //   Insert data
// let Chat1 = new Chat({
//     from:"payal",
//     to:"rahul",
//     msg:"I am waiting for you",
//     created_at: new Date(),
// })

// Chat1.save()
// .then((res)=>{
//     // console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

            //  Index Routes
app.get("/chats", async (req,res)=>{
   let chats = await Chat.find();
//    console.log(chats);
   res.render("index.ejs",{chats})
});


                //   new routes
app.get("/chats/new",(req,res) => {
    res.render("new.ejs")
})         

                    // create route
app.post("/chats",(req,res)=>{
let {from,msg,to} = req.body;
let newChat = new Chat({
    from: from,
    msg:msg,
    to:to,
    created_at: new Date(),
})
newChat.save()
.then((res)=>{
    console.log("data is saved");
})
.catch((err)=>{
    console.log(err);
});
res.redirect("/chats")
});

                 // Edit Routes
                 
app.get("/chats/:id/edit", async (req,res)=>{
let {id} = req.params;
let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
})     

                    //   Update Route
app.put("/chats/:id", async (req,res) =>{
    let { id } = req.params;
    id = id.trim()
    let {msg: newMsg } = req.body
    console.log(newMsg);
    
    let updateChat = await Chat.findByIdAndUpdate(id,
        {msg: newMsg},
        {runValidators: true, new: true}
    )
    console.log(updateChat);
    res.redirect("/chats")
    
})           

                        //delete data

  app.delete("/chats/:id",  async(req,res)=>{
    let { id } = req.params;
    let deleteChat =await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats")

  })                      

app.get("/",(req,res)=>{
    res.send("root is working")
})

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});

