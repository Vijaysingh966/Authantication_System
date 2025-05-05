const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/secureData',auth,(req,res)=>{
    res.json(({secret :"This is secure data of admin"}));
})


module.exports = router;