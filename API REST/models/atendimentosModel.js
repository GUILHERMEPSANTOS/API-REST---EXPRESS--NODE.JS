const conexao = require("../infraestutara/conexao");
const moment = require("moment");
class Atendimento {
  adicionar(atendimento) {
    const dataCriacao = moment().format("YYYY-MM-DD hh:mm:ss");
    const dataAtendimento = moment(
      atendimento.dataAtendimento,
      "DD/MM/YYYY"
    ).format("YYYY-MM-DD");

    const atendimentoDatado = { ...atendimento, dataCriacao,dataAtendimento};
    console.log(atendimentoDatado);
    const sql = `insert into Atendimentos set ?`;
    conexao.query(sql, atendimentoDatado, async (error, response) => {
      if (error) {
        console.log(error);
      } else {
        const res = await response;
        console.log(res);
      }
    });
  }
}

module.exports = new Atendimento();
