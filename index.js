const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();
const  mysql = require('mysql');
const fs = require('fs');
const rl = require('readline');
const dns = require('dns');



app.use(cors());



app.get('/student', function (req, res) {
    
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'student'

  });      
    

    connection.connect();
    connection.query('SELECT * FROM `students`', function (err, results, fields) {
        if (err) {throw err;}
        console.log(results.RowDataPacket);
        connection.end();
        res.send(JSON.stringify(results));

    });

    
})




app.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});

