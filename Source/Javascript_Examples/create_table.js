/**
 CRIANDO UMA TABELA EM UM BANCO DE DADOS
 Autor: Gabriel Fanto
 Versão: 2.0
 Descrição: Criando a primeira Tabela pelo Javascript
 Observação: deve se definir qual Banco de dados vai ser criado a Tabela   
*/

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
    var command = "create table newtable1 (name varchar(255), phone int(30))"
    connection.query(command, function(error,result){
        if(error) throw error;
        console.log(color.blue("Table [newtable1] Created!"));
    });

});