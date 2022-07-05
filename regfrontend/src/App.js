import React from 'react';
//import './App.css';
//import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch}
    from 'react-router-dom';
import Main from './components/Main';
import Header from './components/common/Header';
//import Home from './components/common/Home';
//import Contact from './components/common/Contact';
import Footer from './components/common/Footer';
function App () {
    return (
        <Router>
            <div className='app-contaner'>
        <Header />
        <Switch>
            <Main />
            </Switch>
            <Footer/>
       </div>
       </Router>
    );
    
    }
      
    export default App;