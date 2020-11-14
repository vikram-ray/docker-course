import express from "express"
import axios from "axios"

const app = express()

app.get("/", (req,res)=>res.send("<h1>Hello from polo</h1>"))

app.get("/connect-to-marco", (req,res)=>{
    // connecting to docker network with container name - marco
    // docker will resolve marco with the correct IP of that container while making req
    axios.get("http://marco:3000").then(respone=>{
        return res.send(respone.data)
    }).catch(e => {
        console.log(e);
        return res.send("<h1>Cannot connect. Marco is unavailable.</h1>")
    })
})

app.listen(process.env.PORT, ()=>{
    console.log("server started at ", process.env.PORT)
})