function deleteitem(item){
    console.log(item);
    fetch('/removedata/'+item.innerText,{
        method:"delete"
    }).then(promise=>promise.json()).then(d=>{
    console.log(d);
    location.reload(); 
    });
    
}
   document.getElementById("myForm").onsubmit =(e) => {
    console.log(e);
       const item=document.getElementById("item").value;
       var obj={
             item:item  
       }
       const url = '/sent'
       fetch(url, {
           method: "post",
           body: JSON.stringify(obj),
           headers: {
               'Content-Type':'application/json'
           }
       }).then(res => res.json())
       .then(resp2 =>{console.log(resp2);
        document.getElementById("item").value="";
   })
}
