import mysql from "mysql2"
import config from "../config.js"

class CategoriaModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_categoria){
        let sql = `INSERT INTO categorias (nome_categoria) VALUES("${nome_categoria}"); `

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Categoria inserida"])
            })
        });
    }
    
    read(){
        let sql = `SELECT * FROM categorias;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }

    update(id_categorias,nome_categoria){
        let sql = `UPDATE categorias SET nome_categoria="${nome_categoria}" WHERE id_categorias="${id_categorias}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Atualizado"])
            })
        });
    }

    delete(id_categorias){
        let sql = `DELETE FROM categorias WHERE id_categorias="${id_categorias}"; `
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Deletado"])
            })
        });
    }
}


export default new CategoriaModel();


