import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { render } from 'react-dom';
import About from './components/About'
import Home from './components/Home'
import Docs from './components/Docs'
import axios from 'axios';
import {BrowserRouter,Route}from 'react-router-dom';



class App extends React.Component {
  render(props){
    return (
<BrowserRouter>
<div className="App">
      <Navbar/>
      <h1 id="heading">ITEM-LIST</h1>
      {/* navlink bnate time we specify the link and route se ham bta dete ki is route p konsa component render karna h */}
     <Route exact path="/" component={Home}/>
      <Route  path="/about" component={About}/>
       <Route path="/docs"component={Docs}/>
        </div>
        </BrowserRouter>
        );
         }
      }
export default App;
