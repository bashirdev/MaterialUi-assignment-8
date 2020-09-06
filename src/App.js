import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import Notfound from './components/NotFound/Notfound';

import Post from './components/Post/Post';


function App() {

  return (
    <>
    <Header />
    <Router>
      <Switch>
        <Route path='/home'>
            <Home />
        </Route>
          <Route exact path='/'>
          <Home />
          </Route>
          <Route path='/PostDetail/:Postid'>
           <Post> </Post> 
            
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
      </Switch>
    </Router>
       
    </>
  );
}

export default App;
