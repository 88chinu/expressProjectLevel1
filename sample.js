import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import router from './router/user.js'

const port = 5000

//Home directory
app.get("/", (req, res) =>{
    res.send("Well-come to My Express Project")
})

app.get("/api",(req,res) =>
{ 
    res.json(
    {
        "message":"hello from the api"
})
})

app.use(bodyParser.json());
app.use('/users',router);

app.listen(port, () =>
    {
    console.log(`Server started on port ${port}`);
})