const express = require("express");
let app = express();
let  ExpressError = require("./ExpressError");

// logger - morger
// app.use((req,res,next)=>{
//     req.time = Date(Date.now());
//     console.log(req.method , req.hostname , req.path , req.time);
//     next();
// })

// moddleware
// app.use((req,res,next)=>{
//     console.log("Hi I am 1st middleware");
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("Hi I am 2nd middleware");
//     next();
// }) 
const checkToken = (req,res,next)=>{
    let {token} = req.query;
   
    if(token === "giveaccess"){
        return next();
    }
    throw new ExpressError(401 , "ACCESS DENIED!")
    // throw new Error ("ACCESS DENIED!")
};

app.get("/api",checkToken,(req,res)=>{
   res.send("data")
});

app.get("/",(req,res)=>{
    res.send("Hi this is the root");
});

app.get("/random",(req,res)=>{
    res.send("This is the random page")
});

app.get("/err",(req,res)=>{
    abcd = abcd;
});

// app.use((err,req,res,next)=>{
//     console.log("_ _ _ _ _ ERROR _ _ _ _ _ _ _ _ _");
//     // console.log(err)
//     // next(err);
//     res.send(err)
// });

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is forbidden")
});

app.use((err,req,res,next)=>{
    let {status = 500 ,message = "Some Error Occured"} = err;
    res.status(status).send(message);
});

// app.use((req, res)=>{
//    res.status(404).send("Page not found!")
// })




app.listen(8080 , ()=>{
    console.log("server is listening on port to 8080")
})