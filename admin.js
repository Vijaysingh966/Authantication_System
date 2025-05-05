const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const user = require('./modal/userModal');

dotenv.config();
(async ()=>{
    await mongoose.connect(process.env.DB_CONNECTION);
    const hashpassword = await bcrypt.hash("vijay966",10);

    await user.create({
        username:"vijay singh",
        password:hashpassword,
        role:"admin",
    });

    console.log("Admin user Created!");
    process.exit();
})();