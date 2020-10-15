/**
 CRIANDO UM BANCO DE DADOS NO MYSQL NO JAVASCRIPT
 Autor: Gabriel Fanto
 Versão: 2.0
 Descrição: Criando o Primeiro Banco de dados no Javascript
 Observação1: Baixe o Módulo mysql com o comando (npm install mysql)
 Observação2: Baixe o Módulo cli-color com o comando (npm install cli-color)
*/

// Imports
var mysql = require('mysql');
var color = require('cli-color');

// Criando a Conexão
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senha"
});

// Conectando ao Banco de Dados
connection.connect(function(error){
    if(error) throw error;
    console.log(color.green("MySQL Connected!"));

    // Criando o Banco de dados com o comando query
    connection.query("CREATE DATABASE test",function(error,result){
        if(error) throw error;
        console.log(color.yellow("Database [test] Created!"))
    });
});




