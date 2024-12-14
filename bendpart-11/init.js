let mongoose = require("mongoose");
let Chat = require("/Users/Admin/Desktop/backend/bendpart-10/models/chat.js");

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

let allChats = [
    {
    from:"sagar",
    to:"rahul",
    msg:"hello",
    created_at: new Date(),
},
    {
    from:"vishal",
    to:"rahul",
    msg:"Hello Brother",
    created_at: new Date(),
},
    {
    from:"ganesh",
    to:"friends group",
    msg:"Hello everyone",
    created_at: new Date(),
},
    {
    from:"p_l",
    to:"rahul",
    msg:"I love coding also",
    created_at: new Date(),
},
    {
    from:"harry",
    to:"rahul",
    msg:"how are you",
    created_at: new Date(),
},
]

Chat.insertMany(allChats)
