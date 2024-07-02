// Loads .env file contents into process.env.
require('dotenv').config()

const express = require('express')

const cors = require('cors')

require('./database/connection/connection')
//create server app using express
const server = express()

//use cors and express.json() to your server app  (application specific middleware)
server.use(cors())

server.use(express.json())

//create port to  listen your server app
port = process.env.PORT

//api test
server.get('/',(req,res)=>{
    res.status(200).json("BillBIZZ server started")
})

//Run server app in the specified port
server.listen(port,()=>{
    console.log(`BillBIZZ server started at port : ${port}`);
})

