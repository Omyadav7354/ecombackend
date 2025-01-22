const express = require('express')
const user = require('./routes/user')
const product = require('./routes/product')
const cors = require('cors');
const connectDB = require('./configDB/db');
connectDB()

const app = express()

const port = 5000
app.use(cors());  // This allows requests from any origin
app.use(express.json())
app.use('/users', user)
app.use('/product', product)

app.listen(port, () =>{ 
    console.log(`Server is running on port ${port}`)
})