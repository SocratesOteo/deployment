const express = require('express')
require('dotenv').config()
const path = require('path')
const port = process.env.PORT || process.env.SERVER_PORT

const app = express()
app.use(express.json())

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../home.html'))
})

app.use('/css', express.static(path.join(__dirname, 'home.css')))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})