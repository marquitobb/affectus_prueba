import React from 'react';
import {BrowserRouter,Switch,Route } from "react-router-dom";
//import SignInSide from './views/login/login'; //first login with hooks
import Logindos from './views/login/login2';
import Principal from './views/principal/principal';
import NotFound from "./Notfound";
import RegisterUser from './views/register/register-user';
import SaveFile from './views/savefile/saveFile'

const App = () => (
  <BrowserRouter>    
    <Switch>
        <Route exact path="/" component={Logindos} />          
        <Route exact path="/main" component={Principal} />
        <Route path="/main/upload" component={SaveFile} />
        <Route exact path="/register" component={RegisterUser} />        
        <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)


export default App;
