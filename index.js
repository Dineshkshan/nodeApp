var express = require('express')
var mongo = require('mongoose')
var app = express()
var router = require('./router/router')
var cookieParser = require('cookie-parser')

const URL = 'mongodb://localhost:27017/movietables';

const PORT = 5000


app.use(express.json())
app.use('/',router)
app.use(cookieParser())

mongo.connect(URL,{useUnifiedTopology: true,useNewUrlParser: true},(err)=>
{
    if(err)
    {
        console.log('Connection failed',err)
        return true
    }
    else{
        console.log('Connection successful')
        return false
    }
});

app.listen(PORT,(err)=>
{
    if(err)
    {
        console.log('App is not working')
    }
    else{
        console.log('App is running')
    }
})