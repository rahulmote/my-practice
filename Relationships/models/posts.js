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
    email:String,
});

const postSchema = new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },    
});

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

const addData = async()=>{

    // let user1 = new User({
    //     username:"Rahul Mote",
    //     email:"rmote9921@gmail.com"
    // });

    // let post1 = new Post({
    //     content:"hello world!",
    //     likes:10,
    // });
    
    // post1.user = user1

    // await user1.save();
    // await post1.save();




    // let user = await User.findOne({username:"Rahul Mote"});

    // let post2 = new Post({
    //     content:"Bye Bye!!..",
    //     likes:23,
    // });
    //    post2.user = user;    
    // await post2.save();

    const posts = await Post.findOne({}).populate('user');
    console.log(posts);
} 

addData();