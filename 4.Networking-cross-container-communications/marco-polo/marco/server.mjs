import express from "express"
import axios from "axios"

const app = express()

app.get("/", (req,res)=>res.send("<h1>Hello from marco</h1>"))

app.get("/connect-to-polo", (req,res)=>{
    // connecting to docker network with container name - polo
    // docker will resolve polo with the correct IP of that container while making req
    axios.get("http://polo:3000").then(respone=>{
        return res.send(respone.data)
    }).catch(e => {
        console.log(e);
        return res.send("<h1>Cannot connect. Polo is unavailable.</h1>")
    })
})

app.listen(process.env.PORT, ()=>{
    console.log("server started at ", process.env.PORT)
})