
import './App.css';
import React from 'react'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

document.body.style.backgroundColor ='black';
function App()  {
  
    return (
      
      <div>
       <Router>
         
         <Switch>
         <Route exact path="/"><Page1/></Route>
         <Route exact path="/page2"><Page2/></Route>
         <Route exact path="/page3"><Page3/></Route>
         </Switch>
       </Router>
      
      </div>
    
    )
  }
  export default App;

