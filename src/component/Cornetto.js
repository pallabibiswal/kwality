import React from 'react';
import './component.css';
import {cornetto} from './../app/constants/Application';
import {Link, Route,Switch} from "react-router-dom";
import CornettoTypes from './CornettoTypes';


export default class Cornetto extends React.Component {

    render () {
        return (

            <div className="row">
                <div className="row">
                    <div className="col-md-4">
                        <img  className="image" src={cornetto.image} />
                    </div>
                    <div className="col-md-6 explain">
                        <h6>{cornetto.description}</h6>
                        <br />

                        <Link to="/types">Cornetto Types</Link>
                    </div>
                </div>

            </div>
        );
    }
}