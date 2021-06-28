import React from 'react'
import Nav from './Navigation';
import Img from '../images/pexels-denis-4548232.jpg';
import {  BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import About from './nav_components/About';
import Join from './nav_components/Join';


export default function Main () {

    return (
        <div>
            <Router>
            <Nav/>
            <img src= {Img} alt="pic" />
          
         <Switch>
        <Route path='/about' component={About} />
        <Route path='/join' component={Join} />
   
      </Switch>
      </Router>
           
        </div>
    )
}