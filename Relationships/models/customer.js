const mongoose = require('mongoose');
const {Schema} = mongoose

main()
.then(()=>console.log("connection successfully"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

const orderSchema = new Schema({
    item:String,
    price:Number,
});

const customerSchema = new Schema({
    name:String,
    order:[
        {
        type: Schema.Types.ObjectId,
        ref:"Order",
        },
    ],
});

const Order = new mongoose.model("Order",orderSchema);
const Customer = new mongoose.model("Customer",customerSchema);

const findCustomer = async () =>{
//  let cust1 = new Customer({
//     name:"Rahul Kumar",
//  });

//  let order1 = await Order.findOne({item:"chips"});
//  let order2 = await Order.findOne({item:"pizza"});

//  cust1.orders.push(order1)
//  cust1.orders.push(order2)

//  let result = await cust1.save();
//  console.log(result);

let result = await Customer.find({}).populate('order');
console.log(result[0]);
};

// const addOrders = async () =>{
//  let res = await Order.insertMany([
//         {item:"chips",price:10},
//         {item:"pizza",price:100},
//         {item:"Maggy",price:30},
//         {item:"chocolate",price:50},
//     ]);
//     console.log(res);
// };
// addOrders();
// addCustomer()
findCustomer();









