let express = require('express');
let app=express();
let morgan=require('morgan');
let dotenv =require('dotenv');
dotenv.config();
let port=process.env.PORT ||9870;
let mongo=require('mongodb');
let cors = require('cors')
let MongoClient=mongo.MongoClient;
let mongoUrl =process.env.MongoLiveUrl;
let bodyParser=require('body-parser')

let db;

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

//to get route
app.get('/',(req,res)=>{
    res.send('hi from express')
})

//location
app.get('/location',(req,res)=>{
    db.collection('location').find().toArray((err,result)=>{
        if(err)throw err;
        res.send(result)
    })    
})

//category
app.get('/category',(req,res)=>{
    db.collection('category').find().toArray((err,result)=>{
        if(err)throw err;
        res.send(result)
    })    
})

//products
app.get('/products',(req,res)=>{
    db.collection('products').find().toArray((err,result)=>{
        if(err)throw err;
        res.send(result)
    })    
})

//details of the product wrt ObjectId
app.get('/details/:id',(req,res)=>{
    let id=mongo.ObjectId(req.params.id)
    db.collection('details').find({_id:id}).toArray((err,result)=>{
        if(err)throw err;
        res.send(result)
    })    
})

//details of the product wrt product Id
// app.get('/details/:id',(req,res)=>{
// let id=Number(req.params.id)
// db.collection('details').find({product_id:id}).toArray((err,result)=>{
//  if(err)throw err;
//  res.send(result)
//   })    
//   })

//products wrt category
app.get('/products/:id',(req,res)=>{
  let id = req.params.id;
    db.collection('products').find({category_id:Number(id)}).toArray((err,result)=>{
        if(err)throw err;
        res.send(result)
    })    
})

//products wrt productId
//app.get('/products/:id',(req,res)=>{
//  let id = req.params.id;
//  db.collection('products').find({product_id:Number(id)}).toArray((err,result)=>{
//      if(err)throw err;
//      res.send(result)
//  })    
// })


// Order Details
app.get('/orders',(req,res)=>{
    db.collection('orders').find().toArray((err,result)=>{
        if(err)throw err;
        res.send(result)
    })    
})

// Place Order
app.post('/placeOrder',(req,res) => {
    db.collection('orders').insert(req.body, (err,result) => {
        if(err) throw err;
        res.send('Order Placed')
    })
})


// List of Orders wrt Email
app.get('/orders',(req,res) => {
    let email = req.query.email;
    let query = {}
    if(email){
        query={email}
    }
    db.collection('orders').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})
// Update Order Details with Payment
app.put('/updateOrder/:id',(req,res) => {
    let oid = Number(req.params.id);
    db.collection('orders').updateOne(
        {orderId:oid},
        {
            $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
                "date":req.body.date,
            }
        },(err,result) => {
            if(err) throw err;
            res.send('Order Updated')
        }
    )
})

 //db.orders.update(
//{orderId:3},
//   {
//     $set:{
//      "status":"not delivered"
// }
//}
//)

// Delete Order
app.delete('/deleteOrder/:id',(req,res) => {
    let _id = mongo.ObjectId(req.params.id);
    db.collection('orders').removeOne({_id},(err,result) => {
        if(err) throw err;
        res.send('Order Deleted')
    })
})

//connection with db
MongoClient.connect(mongoUrl,(err,client)=>{
    if(err)console.log(`Error while connecting`);
    db=client.db('bigbasket-data');
    app.listen(port,()=>{
        console.log(`Listening on port ${port}`)
})
})

