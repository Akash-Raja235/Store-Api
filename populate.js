


require("dotenv").config();

const connectDB = require("./db/connect");
const Products = require("./models/schema");

const jsonProducts = require('./products.json')


const start =async (req, res )=>{
    try {
        await connectDB(process.env.MONGO_URL)
        await Products.deleteMany();
        await Products.create(jsonProducts);
        console.log('successsssss')
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()