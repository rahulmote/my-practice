let express = require("express");

let app = express();
// console.log(app)

let port = 3000

app.listen(port,()=>{
  console.log(`i am listening on port ${port}`)
})
// app.use((req,res)=>{
//   console.log("get request")
//   res.send("response")
// })


// app.get("/",(req,res)=>{
//   res.send("you contacted a root path")
// })
// app.get("/apple",(req,res)=>{
  //   res.send("you contacted a apple path")
  // })
  // app.get("/banana",(req,res)=>{
    //   res.send("you contacted a bnana path")
    // })
    // app.get("/orange",(req,res)=>{
      //   res.send("you contacted a orange path")
      // })
      // app.get("*",(req,res)=>{
        //   res.send("this path does not exist")
        // })


        // app.get("/:username/:id",(req,res)=>{
        //   // console.log(req.params)
        //   let {username,id} = req.params
        //   let hello = `<h1>hello i am @${username} ${id}</h1>`;
        //   res.send(hello);
        // })


      // app.get("/search",(req,res)=>{
      //   // console.log(req.query)
      //   let {q}=req.query;
      //   if(!q){
      //     res.send("nothing search")
      //   }
      //   res.send(`these are the results for: ${q}`)
      // })  