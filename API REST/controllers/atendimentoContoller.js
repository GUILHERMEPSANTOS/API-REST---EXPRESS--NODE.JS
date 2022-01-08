
const atendimentosModel = require("../models/atendimentosModel");

module.exports = app => {
    app.get('/atendimentos', (_,res)=>{
      atendimentosModel.listar(res)
    })
    app.get('/atendimentos/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        atendimentosModel.listarID (id,res)
    })

    app.patch('/atendimentos/:id',(req,res)=>{
       
        const id = parseInt(req.params.id)
        const valores = req.body
        atendimentosModel.alterar(id,valores,res)
    })

    app.post('/atendimentos', (req,res)=>{    
        atendimentosModel.adicionar(req.body,res)
    /*   */
    })
    app.delete('/atendimentos/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        atendimentosModel.deletar(id,res)
    })
}






/* const express = require("express")
var router = express.Router();

router.get('/atendimentos', (req,res)=>{
    res.send("segundo modo de exportar a rota")
})
module.exports = router
*/
