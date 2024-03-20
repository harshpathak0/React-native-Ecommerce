const mysql = require ("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ecommerce_schema",
    port:"3306"
}) 

connection.connect(function(err){
    if(err){
        console.log("error", err.sqlMessage)
    }
    else{
        console.log("connection Established...")
    }
})

module.exports =connection;