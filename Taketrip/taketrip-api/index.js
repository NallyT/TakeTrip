const express = require('express');
const cors = require('cors');
const expressMongoDb = require('express-mongo-db');
const bodyParser = require('body-parser');

const app = express();

app.use(expressMongoDb('mongodb://localhost/take'));
app.use(cors());
app.use(bodyParser());

app.get('/estados', function(req, res){
    req.db.collection('estados').find().toArray(function(erro, dados){
        if(erro){
            res.status(500).send('Um erro ocorreu!');
        }
        res.send(dados);
    });
});

app.get('/login', function(req, res){
    res.download('./login.html');
    res.set('Content-Type', 'text/html');
});



app.listen(4000, function(){
    console.log('Servidor inicializado na porta 4000');

});


