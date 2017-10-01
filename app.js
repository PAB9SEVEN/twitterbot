var express=require('express');
var path=require('path');
var exphbs=require('express-handlebars');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var app=express();
var port=9000;
var index=require('./routes/index');
var users=require('./routes/users');
//static folder
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'layout'}));
app.set('view engine','handlebars');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//static folder
app.use(express.static(path.join(__dirname,'public')));
app.use('/static', express.static(__dirname + '/public'));


app.use('/',index);
app.use('/users',users);


app.listen(port,function(){
    
    console.log("the server has started on " +port);
    
});
