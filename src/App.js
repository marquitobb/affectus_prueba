import React from 'react';
import {BrowserRouter,Switch,Route } from "react-router-dom";
import SignInSide from './views/login/login';
import Principal from './views/principal/principal';
import NotFound from "./Notfound";
import RegisterUser from './views/register/register-user';



const App = () => (
  <BrowserRouter>    
    <Switch>
        <Route exact path="/" component={SignInSide} />   
        <Route path="/main/:id" component={Principal} />
        <Route exact path="/register" component={RegisterUser} />
        <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)


export default App;
