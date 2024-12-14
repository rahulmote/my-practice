let express = require("express");
let app = express();
let mongoose = require("mongoose");
let path = require("path");
const methodOverride = require("method-override");

                    //   give structure from other file and insert data 
let Chat = require("../bendpart-10/models/chat");

let ExpressError = require("./ExpressError");


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
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
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
app.get("/chats", asyncWrap(async(req,res)=>{
        let chats = await Chat.find();
        //    console.log(chats);
           res.render("index.ejs",{chats})
}));


                //   new routes
app.get("/chats/new",(req,res) => {
        // throw new ExpressError(404,"Page not found")
        res.render("new.ejs")

});         

                    // create route
app.post("/chats", asyncWrap(async(req,res)=>{
    let {from,msg,to} = req.body;
    let newChat = new Chat({
    from: from,
    msg:msg,
    to:to,
    created_at: new Date(),
    });
     await newChat.save()
     res.redirect("/chats")
}));

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err) => next(err));
    }
}

    // NEW - Show Route 
    app.get("/chats/:id",asyncWrap(async (req,res,next)=>{
            let {id} = req.params;
            let chat = await Chat.findById(id);
            if(!chat){
            next(new ExpressError(500,"Chat not found"));
            }
            res.render("edit.ejs",{chat});
    }));

                 // Edit Routes
                 
app.get("/chats/:id/edit", asyncWrap(async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
 }));     

                    //   Update Route
app.put("/chats/:id", asyncWrap(async (req,res) =>{
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
}));           

                        //delete data

  app.delete("/chats/:id",  asyncWrap(async(req,res)=>{
        let { id } = req.params;
        let deleteChat =await Chat.findByIdAndDelete(id);
        console.log(deleteChat);
        res.redirect("/chats")
  }));

  app.get("/",(req,res)=>{
      res.send("root is working")
  })

  const handelValidationErr =  (err)=>{
      console.log("This was a Validation Error  Please follow rules");
      console.dir(err.message);
    return err;
  }
  app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name === "Validation Error"){
        err = handelValidationErr(err);
    }
    next(err)
  })
//   Error Handling Middleware
app.use((err,req,res,next)=>{
  let{status = 500 , message = "Some Error occurred"} = err;
  res.status(status).send(message);
  
});

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});

