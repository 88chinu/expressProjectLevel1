// const express = require("express")
import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import userRouter from './router/user.js'
import router from './router/user.js'

const port = 5000

app.get("/", (req, res) =>{
    res.send("hello world")
})

app.get("/api",(req,res) =>
{ 
    res.json(
    {
        "message":"hello from the api"
})
})

app.use(bodyParser.json());
app.use('/users',userRouter);

app.listen(port, () =>
    {
    console.log(`Server started on port ${port}`);
})