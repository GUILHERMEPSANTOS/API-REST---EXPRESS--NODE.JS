class Tabelas {
   
    init(conexao){
     
        this.conexao = conexao
        // this.criarAtendimento()
        this.verificarTabelas()
    }
    verificarTabelas(){
        const sql = 'select * from Atendimentos'

        this.conexao.query(sql,  (error)=>{
            if(error){
               if(error.errno == 1146 ) {
                console.log("criando Tabelas")   
                this.criarAtendimento()
               }
            }else{
                console.log("Tabelas já existem")
            }
        })
    }

    criarAtendimento(){
        const sql = `
        create table Atendimentos (
            id int not null AUTO_INCREMENT,  
            cliente VARCHAR (50) NOT NULL, 
            pet varchar(20),
            servico varchar(20) not null,  
            Status_servico varchar(20) not null,
            observacoes text,
            primary key(id)
            );
        
        `
        this.conexao.query(sql, (error)=>{
            if(error){
                console.log(error)
            }else{
                console.log("'Tabelas criadas com sucesso'")
            } 
        })
    }
}
     s 
 
module.exports = new Tabelas  