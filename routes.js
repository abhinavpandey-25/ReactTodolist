
const wishes = require("./models/wish");

module.exports=(app)=>{
app.get('/data',(req,resp)=>{
    console.log("server pr");
    wishes.find({}).then(result=>{
        console.log(result);
    resp.send(result) } )
    })
    ////these get are not routes these are the end points or u can say these are the rest api 
    //now we are not using ejs as we have react at the frontend so we need to fetch the data that was initially present
    //in it
//    wishes.find({}).then(result=>{
//     resp.render('home',{arr:result})
//     }).catch((e)=>console.log(e));
app.get('/about',(req,resp)=>{
    resp.render('about');
});



app.post('/sent',(req,resp)=>{
    console.log(req.body);
    const Item=new wishes({
        wish:req.body.item
    });
    Item.save().then(value=>
    { resp.send(value);
    }).catch(e=>console.log(e));
})
app.delete('/removedata/:id',(req,res)=>{
    console.log("here")
   wishes.deleteOne({_id:req.params.id},(e)=>{
       if(e){
           console.log(e)
       }
       else{
           console.log("deleted");
       }
   }).then(s=>{
    console.log(s);
    res.send(s);
})
//here we are not having method that will return the deleted item
    // wishes.findOneAndDelete({wish:req.params.id})
    // .then(s=>res.send(s));
})
}
