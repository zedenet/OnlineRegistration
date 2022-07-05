import React, { Component } from 'react';
 import { Switch, Route } from 'react-router-dom';
 
 // Our all component files
 
 import CreateUserComponent from './adminComponent/CreateUserComponent';
 import ListUserComponent from './adminComponent/ListUserComponent';
 import UpdateUserComponent from './adminComponent/UpdateUserComponent';
 import ViewUserComponent from './adminComponent/ViewUserComponent';
 
 class Main extends Component {
 
 render() {
 return (
 <main>
<Switch>
 <Route path='/CreateUserComponent' Component={CreateUserComponent} />
 <Route path='/ListUserComponent' Component={ListUserComponent} /> 
 <Route path='/ViewUserComponent/:id' Component={ViewUserComponent} />
 <Route path='/UpdateUserComponent/:id' Component={UpdateUserComponent} />
 </Switch>
 </main>
 );
 }
 }

 export default Main;
