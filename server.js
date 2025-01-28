const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./configDB/db');
connectDB()

app.use(express.json())
app.use(cors())
app.use('/product', require('./routes/product'))
app.use('/users',require('./routes/user'))


Port = 9000

app.listen(Port, () => {
    console.log(`Server is running at https://localhost${Port}`)
});