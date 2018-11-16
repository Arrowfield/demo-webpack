const express = require('express')
var route = express.Router()
route.get('/test',(req,res)=>{
  res.send('Welcome to my js word')
})
module.exports = route