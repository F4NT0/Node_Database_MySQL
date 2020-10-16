# Deletando uma Tabela do Banco de Dados

* Anteriormente
  * [Criando conexão com MySQL](../../Source/Markdown/node_mysql.md)
  * [Criando uma Tabela em um Banco de Dados](../../Source/Markdown/create_table.md)

Template de Informação Básica

```javascript
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

    // Adicione a Query Aqui

});
```

* Caso a Tabela esteja vazia, somente usamos o seguinte comando SQL

```sql
drop table tableName
```

* Usamos esse comando em Javascript com a Função **query**

```javascript
// Deletando uma Tabela nova no Banco de Dados
var command = "drop table newtable1";
connection.query(command, function(error,result){
    if(error) throw error;
    console.log(color.red("Table [newtable1] Deleted!"));
    });
```

O módulo **cli-color** serve para poder apresentar colorido as saídas pelo Terminal.

* Código Completo se Encontra [AQUI](../../Source/Javascript_Examples/delete_table.js)