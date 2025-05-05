const express = require('express');
const dbconnect = require('./config/DBConnect')
const dotenv = require('dotenv');
const app = express()
const admin = require('./middleware/auth')
dotenv.config()
dbconnect()

app.use(express.json());

const adminRout = require("./routs/userLoginRout");

// const protected = require("./routs/secureRout")

 app.use('/api',require('./routs/userLoginRout'))
 

 
// app.use('/admin')
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on the Port ${PORT}`);

})
