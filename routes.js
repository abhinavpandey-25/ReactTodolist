const wishes = require("./models/wish");

module.exports=(app)=>{
app.get('/',(req,resp)=>{
   wishes.find({}).then(result=>{
    resp.render('home',{arr:result})
    }).catch((e)=>console.log(e));
     });

app.get('/about',(req,resp)=>{
    resp.render('about');
});
app.post('/sent',(req,resp)=>{
    const Item=new wishes({
        wish:req.body.item
    });
    Item.save().then(value=>
    { resp.send(value);
    }).catch(e=>console.log(e));
})
app.delete('/removedata/:id',(req,res)=>{
    wishes.findOneAndDelete({wish:req.params.id})
    .then(s=>res.send(s));
})
}
