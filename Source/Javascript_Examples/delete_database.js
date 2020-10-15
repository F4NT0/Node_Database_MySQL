/**
 DELETANDO UM BANCO DE DADOS NO MYSQL NO JAVASCRIPT
 Autor: Gabriel Fanto
 Versão: 2.0
 Descrição: Deletando o Primeiro Banco de dados no Javascript
 Observação1: Baixe o Módulo mysql com o comando (npm install mysql)
 Observação2: Baixe o Módulo cli-color com o comando (npm install cli-color)
*/

// IMPORTS
var mysql = require('mysql');
var color = require('cli-color');


// CRIANDO A CONEXÃO
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senha"
});

// CONECTANDO
connection.connect(function(error){
    if(error) throw error;
    console.log(color.green("MySQL Connected!"));

    // Deletando os bancos de dados criado
    connection.query("drop database connection", function(error,result){
        if(error) throw error;
        console.log(color.red("Database [connection] Deleted!"));
    });

});