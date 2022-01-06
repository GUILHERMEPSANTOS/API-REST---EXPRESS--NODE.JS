const customExpress = require("./config/customExpress")
const app = customExpress()
const conexao = require("./infraestutara/conexao")
const Tabelas = require('./infraestutara/tabelas')

conexao.connect((error,args)=>{
    if(error){ 
        console.log(error)
    }else {
        console.log("conectado com sucesso ")
        Tabelas.init(conexao)
        app.listen(3333, console.log(`Servidor rodando na porta 3333`))
    }
}) 