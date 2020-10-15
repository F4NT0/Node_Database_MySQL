/**
 EXEMPLO DE CONEXÃO SIMPLES AO BANCO DE DADOS MYSQL
 Autor: Gabriel Fanto
 Versão: 2.0
 Descrição: Como fazer uma simples conexão com MySQL
 Observação: Baixe o Módulo mysql com o comando (npm install mysql)
*/

// Import do Módulo do MySQL
var mysql = require('mysql');

// Criando a Conexão com o MySQL
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senha"
});

// Conectando ao Banco de Dados
connection.connect(function(error){
    if(error) throw error;
    console.log("MySQL Connected!");
})