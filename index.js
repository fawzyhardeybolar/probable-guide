const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000

app.get('/test', (req, res)=>{
    res.send('working')
})

app.listen(port, ()=>{
    console.log('server running');
})