const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/productDetails');
const products = require('./products/products');
const connectDb = require('./config/database')

dotenv.config();

connectDb();

const importdata = async()=>{
    try {
        const sampledata = products.map(product=>{
            return{...product};
        })
        await Product.insertMany(sampledata);
        console.log('data imported');
        process.exit();
    } catch (error) {
        console.log('error in importdata functon : ',error)
        process.exit(1);
    }
}

const dataDestroy = async()=>{
    try {
        await Product.deleteMany();
        console.log("data deleted ");
        process.exit();

    } catch (error) {
        console.log('error in dataDestroy functon : ',error)
        process.exit(1);
    }
}


if(process.argv[2]==='-d'){
    dataDestroy();   
}
else{
    importdata();
}