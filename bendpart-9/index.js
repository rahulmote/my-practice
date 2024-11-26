// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/college');

// main()
// .then(()=>{
// console.log("connection successfully");
// })
// .catch((err) =>{
//    console.log(err)
//   });

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

// }

// const userSchema = new mongoose.Schema({
//   name : String,
//   email : String,
//   age : Number,
// })


// const User = mongoose.model("User",userSchema);

               // for inser one 

// const user2 = new User({
//   name:"eve",
//   email:"eve@google.com",
//   age:110
// });

// user2.save()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })


              // for insert many 

// User.insertMany([
//   {name:"Tony",email:"Tony@gmaul.com",age:50},
//   {name:"Peter",email:"Peter@gmaul.com",age:30},
//   {name:"Bruce",email:"Bruce@gmaul.com",age:47}
// ]).then((res)=>{
//   console.log(res)
// })


              // find  
              
    // User.find({age:{$gte:47}})
    // .then((res) =>{
    //   console.log(res);
    // })
    // .catch((err)=>{
    //   console.log(err);
    // });


    // User.findOne({{age:{$gte:47}})
    // .then((res) =>{
    //   console.log(res);
    // })
    // .catch((err)=>{
    //   console.log(err);
    // });



    // User.findById({ _id:'673c5fd8037e4346c251f468'})
    // .then((res) =>{
    //   console.log(res);
    // })
    // .catch((err)=>{
    //   console.log(err);
    // });

                    //for updataOne   
   
  // User.updateOne({name:"Bruce"},{age:48})
  // .then((res)=>{
  //   console.log(res)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // });                  

                    //  for updateMany

  // User.updateMany({age: {$gt:48}},{age:50})
  // .then((res)=>{
  //   console.log(res)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // }); 
  
  
                  //for findAndUpdate
//  User.findOneAndUpdate({name:"Peter"},{age:60},{false:true})
//  .then((res)=>{
//   console.log(res);
//  })     
//  .catch((err)=>{
//   console.log(err);
//  })  

                 // for findByIdAndUpdate 
             
// User.findByIdAndUpdate({_id:'673c6098dfa046d1a5f932d9'},{name:"Bruce"},{email:"Bruce@gmaul.com"},{false:true})
// .then((res)=>{
//   console.log(res);
// })                 
// .catch((err)=>{
//   console.log(err);
// });

                          // for deleteOne

// User.deleteOne({name:"Peter"})
// .then((res)=>{
//   console.log(res);
// })

                          // for deleteMany

// User.deleteMany({age:50})
// .then((res)=>{
//   console.log(res);
// })

                          // for findByIdAndDelete

// User.findByIdAndDelete({_id:'673c790aa8cbbbddd8fce1fd'})
// .then((res)=>{
//   console.log(res);
// })                 
// .catch((err)=>{
//   console.log(err);
// });

                          // for findOneAndDelete

// User.findOneAndDelete({name:"Bruce"})
// .then((res)=>{
//   console.log(res);
// })                 
// .catch((err)=>{
//   console.log(err);
// }); 

///////////////////////////////////////////////////////////////////////////////////////////////
                        //Schema Validation

const mongoose = require('mongoose');

main()
.then(()=>{
console.log("connection successfully");
})
.catch((err) =>{
   console.log(err)
  });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}      

const bookSchema = new mongoose.Schema({
  title:{
    type:String,
    maxLength:20,
    required:true,
  },
  author:{
    type:String,
  },
  price:{
    type:Number,
    min:[1,"price is too low for amazon starting"] ,
  },
  discount:{
    type : Number,
    default:0,
  },
  // category:{
  //   type: String,
  //   enum:["fiction","non-fiction"],
  // }
  genre:[String]
}); 

const Book = mongoose.model("Book",bookSchema);

// const book1 = new Book({
//   title : "how to kill our enamy",
//   author:"me",
//   price:500
// });

// book1.save()
// .then((res) =>{
//   console.log(res)
// });

// const book1 = new Book({
//   title : "Mathematics VII",
//   price:299,
//   genre:["fiction","non-fiction","comics"]

// });

// book1.save()
// .then((res) =>{
//   console.log(res)
// });


Book.findByIdAndUpdate('6745867100412e073c12bc17',{price:-500},{runValidators:true})
.then((res)=>{
  console.log(res);
})                 
.catch((err)=>{
  console.log(err.errors.price.properties.message);
});






    