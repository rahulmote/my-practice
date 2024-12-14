const mongoose = require('mongoose');
const {Schema} = mongoose

main()
.then(()=>console.log("connection successfully"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

const userSchema = new Schema({
    
    username:String,
    addresses:[{
        _id :false,
        location:String,
        country:String,
    }
    ],
});

const User = new mongoose.model("User",userSchema);

const addUsers = async()=>{
let user1 = new User({
    username:"Rahul Mote",
   addresses:[{
    location:"Chh.Sambhajinagar",
    country:"India",
    },
],
});

user1.addresses.push({location:"Nashik", country:"India"});
 let result = await user1.save();
 console.log(result)
};

addUsers();

