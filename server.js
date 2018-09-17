var express = require('express');
var app = express();
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('pages/index');
});

app.get('/',function(req,res){
    res.render('pages/students');
});


app.listen(8080);