import CategoriaModel from "../Models/CategoriaModel.js";

class CategoriaController{
    constructor(){

    }

    create(req,res){
        const nome_categoria = req.body.nome_categoria
        CategoriaModel.create(nome_categoria).then(
            resposta =>{
                console.debug("Cadastrando uma categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Cadastrando uma categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    read(req,res){
        CategoriaModel.read().then(
            resposta =>{
                console.debug("Exibindo categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Exibindo categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    update(req,res){
        const id_categorias = req.params.id_categorias
        const nome_categoria = req.body.nome_categoria
        CategoriaModel.update(id_categorias,nome_categoria).then(
            resposta =>{
                console.debug("Atualizando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Atualizando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    delete(req,res){
        const id_categorias = req.params.id_categorias
        CategoriaModel.delete(id_categorias).then(
            resposta =>{
                console.debug("Deletando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Deletando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

}

export default new CategoriaController()