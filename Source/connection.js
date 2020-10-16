// IMPORTS
var mysql = require('mysql');
var color = require('cli-color');


// CRIANDO A CONEXÃO
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senha",
    database: "connection" //definindo o banco de dados
});

// CONECTANDO
connection.connect(function(error){
    if(error) throw error;
    console.log(color.green("MySQL Connected!"));

    // Criando uma Tabela nova no Banco de Dados
    var command = "drop table newtable1";
    connection.query(command, function(error,result){
        if(error) throw error;
        console.log(color.red("Table [newtable1] Deleted!"));
    });

});