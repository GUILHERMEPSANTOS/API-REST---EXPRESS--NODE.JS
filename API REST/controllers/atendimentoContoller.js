const req = require("express/lib/request");
const { append } = require("express/lib/response");

module.exports = app => {
    app.get('/atendimentos', (req,res)=>{
        res.send("você está na rota de atendimentos ")
    })

    app.post('/atendimentos', (req,res)=>{
    console.log(req.body)
    res.send('você esta na rota de atendimento POST ')        
    })
}






/* const express = require("express")
var router = express.Router();

router.get('/atendimentos', (req,res)=>{
    res.send("segundo modo de exportar a rota")
})
module.exports = router
*/