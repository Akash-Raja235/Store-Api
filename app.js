

require('dotenv').config()
// express error
require('express-async-errors')
const express =require('express')
const app = express()

const connectDB = require('./db/connect')
const Products = require("./models/schema");

const  router =require('./routes/routing')
const errorHandlerMiddleware =require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

//middleware for post
app.use(express.json())

// routes
app.get('/', (req, res)=>{
    res.send('<h1>Store Api</h1><a href="/api/v1/products">product</a>')
})

app.use("/api/v1/products", router);


app.use(errorHandlerMiddleware);
app.use(notFound);


const port = process.env.PORT || 3000
const start = async ()=>{
try {
    await connectDB(process.env.MONGO_URL)
 app.listen(port, () => {
   console.log(`listening on port ${port}`);
 });
} catch (error) {
   console.log(error)
}
}

start();