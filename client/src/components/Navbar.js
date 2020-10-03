import React from 'react';
import {Link,withRouter} from 'react-router-dom'
function Navbar(props){
   // since we warpped with withrouter so we can have history through which we can
   //navigate to any route access otherwise not console.log(props);
    return(
        <nav>
        <div className="nav-wrapper" style={{backgroundColor:"red"}}>
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right ">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/docs">Docs</Link></li>
           
           </ul>
        </div>
      </nav>

    )
}

//wrapping navbar with withRouter help in providng hitory props to navbar so that we can move to any page we want 
export default withRouter(Navbar);