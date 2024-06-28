import mysql from "mysql2"
import config from "../config.js"

class DoceModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_doce,id_categorias){
        let sql = `INSERT INTO doces (nome_doce,id_categorias) VALUES("${nome_doce}",${id_categorias}"); `

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Doce inserido"])
            })
        });
    }
    
    read(){
        let sql = `SELECT * FROM doces;`
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

    update(id_categorias,nome_doce,id_doce){
        let sql = `UPDATE categorias SET nome_doce="${nome_doce}",id_categorias="${id_categorias}" WHERE id_doce="${id_doce}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Doce atualizado"])
            })
        });
    }

    delete(id_categorias){
        let sql = `DELETE FROM doces WHERE id_doce="${id_doce}"; `
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Doce deletado"])
            })
        });
    }
}


export default new DoceModel();


