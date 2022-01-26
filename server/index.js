const express = require('express')
require('dotenv').config()
const path = require('path')
const port = process.env.PORT || process.env.SERVER_PORT

const app = express()
app.use(express.json())

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../index.html'))
})

app.use('/js', express.static(path.join(__dirname, 'public/main.js')))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})