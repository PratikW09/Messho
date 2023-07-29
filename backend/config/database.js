const mongoose = require('mongoose');

const connectDb = async()=>{
    try {
        const conn = await mongoose.connect('mongodb+srv://walalepratik09:pinu2003@cluster0.hmd7xoj.mongodb.net/?retryWrites=true&w=majority');
        console.log(`mongoDb connected succefully !!! ${conn.connection.host}`);
        // console.log(process.env.MONGO_URL)
    } catch (error) {
        console.log("Error: ",error.message);
        process.exit(1);
    }
}

module.exports = connectDb;