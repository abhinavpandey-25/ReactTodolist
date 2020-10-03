import { json, text } from 'body-parser';
import React from 'react'
class Home extends React.Component{

  //hame sirf build folder se matlab h if but agar uske bad hamne kisi component   m chages kare 
  //then dubara build karna padega
  state={
    text:'',
    input:[{_id:1,wish:'...loading'}]
  }
  fetchdata(){
    fetch('/data').then(res=>res.json()).then(result=>{
      //console.log(result);
      this.setState({input:result})
    });
  }
componentDidMount(){
  //console.log("mounted");
    this.fetchdata();
}
handleDelete(e){
  console.log(e);
  
  fetch('/removedata/'+e,{
    'method':'delete'
  }).then(res=>res.json())
  .then(result=>{
    console.log(result);
    // const newinput=this.state.input.filter((item)=>{
    //   return( result._id!==item._id);
   // })
   //this.setState({input:newinput})
    });  
   this.fetchdata();
  //2 ways we have to re render dom after deletion 1 is to agian call the gete method or the other could be 
  //since we have id of data which we deleted so use filter
  }
  handlesubmit(event){
    event.preventDefault();
    //console.log(event.target);
    //will give the whole form
    var item=new URLSearchParams();
    //so we use the Url search pattern in the form of key value  ppair
    for(const pair of new FormData(event.target)){
      // console.log(pair);
      //will get eveey pair of name value new form data(from form)
      item.append(pair[0],pair[1]);
    } 
  //   const listitem={
  //     item:document.getElementsByName("item")
  //   }

  //we will get the cors error if we have frontend and backend at different server hame server  ko batana pdta ki usko kiski
  //request accept karna h uske alwa ki req kre toh ie a violation of CORS policy kyki meri frontend se request to facebook
  //will be rejected unless facebook server allows me

  //can be solved using two way ya m fetch m server ka adres daldu aur uske bad server par cors policy violate krdu but 
  //that is not good at production  leevel.
    fetch('/sent',{
     'method':"POST",
      'body':item,
   }).then(res=>res.json()).then(res2=>{
        this.setState({
        input:[...this.state.input,res2]
   })
  //here u cannot use the below statement as it wouudl push the item but the dom willl not get rendered.
  //  this.state.input.push(res2);
  //  console.log(this.state.input);
  });
  event.target.value="";
  this.setState({text:""});
  }
    render(props){
      const list=this.state.input.map( val=>{ return (
        <div  dbid={val._id.toString()} key={val._id} onClick={(e)=>this.handleDelete(val._id)} className="item ">{val.wish}</div>)})      
      return(
      <div>
      <form onSubmit={(e)=>{this.handlesubmit(e)}}>
        <p id="para" >Click on the Items to delete</p>
        <input type="text" autoComplete="off" id="content"  name="item" value={this.state.text} onChange={(e)=>{this.setState({text:e.target.value})}}></input>
        <button className="waves-effect waves-light btn">Submit</button>
      </form>
      <div className="collection">
   <div className="central">
      {list}
   </div>
      </div>
       </div>
       )
    }
  }
  export default Home;