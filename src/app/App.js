import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';
import NavHeader from '../container/NavHeader';
import {Route} from "react-router-dom";
import Cornetto from './../component/Cornetto';


class App extends Component {
    render() {
        return (
            <div className="container">
                <NavHeader />

                <Route path="/cornetto" component={Cornetto}/>
            </div>
        );
    }
}

export default App;
