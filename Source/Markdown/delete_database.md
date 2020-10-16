# Usando SQL para deletar um Banco de Dados

* Anteriormente:
    * [Criando Conexão MySQL](../Markdown/node_mysql.md)
    * [Criando um Banco de Dados](../Markdown/create_database.md)

### Comando SQL

O comando SQL para Deletar um banco de dados se chama **drop** como abaixo

```sql
drop database databaseName
```

### Deletando pelo Javascript

Da mesma forma como foi criada o Banco de Dados é para deletar um Banco de Dados, utilizando a Função **query**

O Template de iniciação do Módulo mysql é sempre o mesmo:

```javascript
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senha"
});

connection.connect(function(error){
    if(error) throw error;
    console.log("MySQL Connected!");

    //Insert the query here
});
```

Agora podemos colocar a Função query desejada exatamente onde se encontra o comentário acima, onde iremos colocar o comando de SQL explicado

```javascript
connection.connect(function(error){
    if(error) throw error;
    console.log("MySQL Connected!");

    // Query Function to Delete Database
    connection.query("drop database test",function(error,result){
        if(error) throw error;
        console.log("Database [test] Deleted!");
    });
});
```

* O Arquivo com o Exemplo Completo se encontra [AQUI](../Javascript_Examples/delete_database.js)

