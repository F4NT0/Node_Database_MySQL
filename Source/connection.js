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

    // Deletando os bancos de dados criados
    connection.query("drop database connection", function(error,result){
        if(error) throw error;
        console.log(color.red("Database [connection] Deleted!"));
    });

});