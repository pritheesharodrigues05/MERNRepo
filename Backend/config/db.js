const mongoose = require('mongoose');


const connectDb = async ()=>{


try {
    mongoose.set("strictQuery", true);

    // {  useNewUrlParser: true,
        // useUnifiedTopology: true}
    const conn= await mongoose.connect('mongodb://127.0.0.1:27017/mernapp');
    // const conn= await mongoose.connect(process.env.MONGO_URI);

    console.log(`Mongodb Server connected ${conn.connection.host}, ${conn.connection.port}.cyan.underline`)

} catch (error) {
    console.log("Mongo connnection failed", error);    
    process.exit(1);
}

}


module.exports = connectDb