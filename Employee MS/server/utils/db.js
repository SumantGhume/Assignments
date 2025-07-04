import mysql from 'mysql2'

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"root@12",
    database:"employeems"
})

con.connect(function(err){
    if(err){
        console.log("Connection Error")
    }else{
        console.log("Connected")
    }
    
});

export default con;