const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        rate:{
            type:Number,
            default:0,
        },
        count:{
            type:Number,
            default:0,
        }
    },
},{timestamps:true});

const Product = mongoose.model("Product",productsSchema);
module.exports = Product;