const bodyParser = require('body-parser');
const express=require('express');
const port=process.env.PORT ||3030;
const app=express();
const routes=require('./routes');
const mongoose=require('mongoose');
const {mongourl}=require('./config/keys');
mongoose.connect(mongourl,{ useNewUrlParser: true , useUnifiedTopology: true } );
require('./models/wish');
//public will serve the static files
app.use(express.static('public'));
app.set('view engine','ejs');
//the above two are middlewares that help in the execution of the other functions
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
routes(app);

app.listen(port,()=>console.log("server started"));

// const http=require('http');
// http.createServer((req,resp)=>{
//     resp.write("Helll");
//     resp.end();
// }).listen(3030);
// console.log("server is runnnig");
// const getsum=require('./test');
// console.log(getsum.mult(12,21));
// console.log(getsum.div(42,7));