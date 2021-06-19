const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors')

const app = express();
const port = 4000;

app.use(bodyParser.json({limit:'100mb'}));
app.use(cors());

app.all('*', function(req,res,next){
    res.header('Access-Control-Allow-Oirgin', '*');
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Header','Content-Type');
    next();
})
app.post('/api/postName', function(req,res){

    let bodyReq = req.body;

    let fullName = `Full user Name is ${bodyReq.firstName} ${bodyReq.lastName}`

    res.send({
        "status": "OK",
        "message": fullName
    });
})

app.get('/api/getGreeting', function(req,res){
    res.send({
        "status": "OK",
        "message": 'HELLOOOOOO'
    })
})

app.listen(port,function(){
    console.log(`API listening at port ${port}`)
})
