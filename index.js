const express = require("express");

const app = express();

app.use(express.static("."));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/html/index.html")
} )


app.get("/pagina2", function(req, res){
    res.sendFile(__dirname + "/public/html/pagina2.html")
} )





app.listen(8000, ()=>{
    console.log("Servisor funcionando en puerto 8000");
})
