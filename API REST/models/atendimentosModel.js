const conexao = require("../infraestutara/conexao");
const moment = require("moment");

class Atendimento {
  adicionar(atendimento,res) {
    const dataCriacao = moment().format("YYYY-MM-DD hh:mm:ss");
    const dataAtendimento = moment(
      atendimento.dataAtendimento,
      "DD/MM/YYYY"
    ).format("YYYY-MM-DD");


    const dataEhValida = moment(dataAtendimento).isSameOrAfter(dataCriacao);
    const clienteEhValido = atendimento.cliente.trim().length >= 3
    const validacoes =
     [
        {
          nome: 'data',
          valido:dataEhValida,
          mensagem: 'A data deve ser maior ou igual a Data atual'
        },
        {
          nome:'cliente',
          valido: clienteEhValido,
          mensagem:'O nome do cliente deve ser maior que 5 caracteres'
        }
     ]

     const erros = validacoes.filter(campos => !campos.valido)
     const existemErros = erros.length

     if(existemErros){
       res.status(400).json(erros)
     }else{
      const atendimentoDatado = { ...atendimento, dataCriacao,dataAtendimento}      
      const sql = `insert into Atendimentos set ?`;
      conexao.query(sql, atendimentoDatado, async (error, response) => {
        if (error) {
          res.status(400).json(error);
        } else {
          res.status(201).json({...atendimentoDatado,Messagem: "Usuario Cadastrrado com sucesso!!!"});
        }
      });
     }
  }
  listar(res){
    const sql = 'select * from Atendimentos'

    conexao.query(sql, async (error,results)=>{
      if(error){
        res.status(400).json(error)
      }else{
        res.status(200).json(await results) 
      }
    })
  }
  listarID(id,res){
  const sql = `select * from Atendimentos where id = ${id} `


  conexao.query(sql, async (error,results)=>{
    if(error){
      res.status(400).json(error())
    }else{
      res.status(200).json(await results[0])
    }
  })
 }
 alterar(id,valores,res){
 
   if(valores.dataAtendimento){
    valores.dataAtendimento = moment(
      valores.dataAtendimento,
      "DD/MM/YYYY"
    ).format("YYYY-MM-DD");
   }
    const sql = `update Atendimentos set? where id=?`
/* ? podemos passar mais de um parametro */
    conexao.query(sql,[valores,id], async(error, results)=>{
      if(error){
        res.status(400).json(error)
      }else{
        res.status(200).json({...valores,menssagem:`OS dados do usuario de id:${id} foram alterados com sucesso`})
      }
    })
 }
 deletar(id,res){
  const sql = `delete from Atendimentos where id=?`

  conexao.query(sql,id, async (error,results)=>{
    if(error){
      res.status(400).json(error)
    }else {
      res.status(200).json({id,
      menssagem:`Atendimento deletado`})
    }
  })
 }
}

module.exports = new Atendimento();
