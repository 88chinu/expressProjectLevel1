const express = require("express")
const app = express()
const port = 5000
const bodyParser = require("body-parser")

app.get("/", (req, res) =>{
    res.send("hello world")
})

app.use(bodyParser.json())

app.get("/api",(req,res) =>
{ 
    res.json(
    {
        "message":"hello from the api"
})
})


app.listen(port, () =>
    {
    console.log(`my application is ${port}`)
}
)

