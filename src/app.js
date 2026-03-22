const express = require("express")

const app = express()

app.use("/",function(req,res) {
    res.send("Hello Hello Hello.")
})

app.listen(4444,()=>{
    console.log("Server listening on port 4444 ...")
})