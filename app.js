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
//app.use(express.static(__dirname+'/public'));
//app.set('view engine','ejs');
//kyuki ab templating engine use nahi karna react use kr rahe
//the above two are middlewares that help in the execution of the other functions
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
routes(app);
//ab do server ki jagh ek server h to koi bhi get req mange toh index.html hi dikhao kyuki usme react juda h
if(process.env.NODE_ENV=="production"){
    app.use(express.static('./client/build'));
    const path=require('path');
    app.get('*',(req,resp)=>{
        resp.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}
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
//we can deploy using 2 ways push only build folder and server files while hosting
//2 scenario sending build is not good so jis server p host kroge 
//usko bol do ki tu build npm run build kar aur dependecy bhi installl karni padegi 
// isme node modules onr time hi use hogi