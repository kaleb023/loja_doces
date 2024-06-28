import DoceModel from "../Models/DoceModel.js"

class DoceController{
    constructor(){

    }

    create(req,res){
        const nome_doce = req.body.nome_doce
        const id_categorias = req.body.id_categorias
        CategoriaModel.create(nome_doce,id_categorias).then(
            resposta =>{
                console.debug("Cadastrando um doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Cadastrando um doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    read(req,res){
        DoceModel.read().then(
            resposta =>{
                console.debug("Exibindo doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Exibindo doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    update(req,res){
        const id_doce = req.params.id_doce
        const nome_doce = req.body.nome_doce
        const id_categorias = req.params.id_categorias
        CategoriaModel.update(id_categorias,nome_doce,id_doce).then(
            resposta =>{
                console.debug("Atualizando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Atualizando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    delete(req,res){
        const id_doce = req.params.id_doce
        DoceModel.delete(id_doce).then(
            resposta =>{
                console.debug("Deletando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Deletando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

}

export default new DoceController()