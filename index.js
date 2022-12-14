require('dotenv').config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3625
require("./DL/db").connect();

const cors = require("cors")

app.use(cors())
app.use(express.json())

app.use('/user', require('./Routes/user.route'))
app.use('/product', require('./Routes/product.route'))



app.listen(PORT, () => {
    console.log('Server is running : listening to port ' + PORT);
})
