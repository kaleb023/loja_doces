import express from "express"
import CategoriaController from "./Controllers/CategoriaController.js"
import DoceController from "./Controllers/DoceController.js"

const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("Servidor funcionando")
})

server.post("/categorias",CategoriaController.create)
server.get("/categorias",CategoriaController.read)
server.put("/categorias/:id_categorias",CategoriaController.update)
server.delete("/categorias/:id_categorias",CategoriaController.delete)

server.post("/doces",DoceController.create)
server.get("/doces",DoceController.read)
server.put("/categorias/:id_doce",DoceController.update)
server.delete("/categorias/:id_doce",DoceController.delete)


server.listen(5000)