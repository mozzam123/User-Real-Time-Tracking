const express = require("express")
const app = express()


app.get('/', (req, res) =>{
    res.send("Home page")
})


app.listen(2222, (req, res) =>{
    console.log('Listening on port 2222');
})   