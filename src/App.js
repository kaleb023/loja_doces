import express from "express"
import CategoriaController from "./Controllers/CategoriaController.js"

const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("Servidor funcionando")
})

server.post("/categorias",CategoriaController.create)
server.get("/categorias",CategoriaController.read)
server.put("/categorias/:id_categorias",CategoriaController.update)
server.delete("/categorias/:id_categorias",CategoriaController.delete)


server.listen(5000)