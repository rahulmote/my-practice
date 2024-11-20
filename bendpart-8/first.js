                          // mongodb part 1


// use college;
// show dbs;
// db.student.insertOne({name:"rahul",age :18,lname : "mote"});
// db.student.find();

//  db.student.findOne({name:"rahul", age:18});

//  db.student.insertMany([{name:"ganesh",marks:90,city:"mumbai"},{ name:"personal",marks:"depend on h..",city:"jalna"}]);

// db.student.find({$or:[{age:{$gt:19}},{marks:{$gt:80}}]});
//  db.student.find({age:{$in:[18,21]}});

// db.student.update({name: "rahul"},{$set:{marks:99}});

//  db.student.updateMany({name: "rahul"},{$set:{marks:99,city:"chh.sambhajinagar"}});

// db.student.replaceOne({name:"rahul"},{marks:90 , city:"chh.sambhajinagar" , lname:"mote"});

//  db.student.insertOne({name:"vishal", performance:{marks:75,grade:"A"}});
//  db.student.find({"performance.marks":75});

// db.student.deleteOne({name:"me"});
//  db.student.deleteMany({city:"jalna"});
// db.student.deleteMany({});
// db.dropDatabase();

