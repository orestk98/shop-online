import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';




function App(){
  return(
    <div>
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route  path='/shop' component={ShopPage}/>
    <Route  path='/signin' component={SignInAndSignUpPage}/>

    </Switch>
    </div>
  );
}

export default App;
