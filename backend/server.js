const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/database');
const User = require('./models/user');
const products = require('./products/products')
const cors = require('cors');
const router = require('./routes/productsRoute');



const app = express();
dotenv.config();
app.use(cors());
//connecting to database function 
connectDb();

app.use(router);

// this is we done for chcking that our user shcema is created or not
// const user1 = new User();
// user1.name="user1 userlastname";
// user1.email="user1@gmail.com";
// user1.password="12346";

// user1.save()
//   .then((savedUser) => {
//     console.log('User saved successfully:', savedUser);
//   })
//   .catch((err) => {
//     console.error('Error saving user:', err);
//   });

app.get('/',(req,res)=>{
    res.send("server is from node server");
})

// app.get('/products',(req,res)=>{
//     res.send(products);
// })

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})