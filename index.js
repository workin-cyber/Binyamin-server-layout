require('dotenv').config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3625
require("./DL/db").connect();

const cors = require("cors")

app.use(cors())
app.use(express.json())

const users = []
let user = {
    id: 123,
    fName : "aviad",
    age : 31,
    address : "Kfar Adumim"
}
users.push(user)

app.get('/user', (req, res) => {
    res.send(users)
})
app.post('/user', (req, res) => {
    
    users.push(req.body)
    res.sendStatus(201)
})
app.get('/user/:id', (req, res) => {
    let user = users.find(u=>u.id==req.params.id)
    if(user) res.send(user)

    res.status(400).send("user is not exist")
})

const productService= require('./BL/product.service')
app.post('/product',async (req,res)=>{
    let p = await productService.createNewProduct(req.body)
    res.send(p)
})

app.listen(PORT, () => {
    console.log('Server is running : listening to port ' + PORT);
})
