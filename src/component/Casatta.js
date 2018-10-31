import React from 'react';
import './component.css';
import {casatta} from './../app/constants/Application';

export default class Casatta extends React.Component {

    render () {
        return (
            <div className="row">
                <div className="col-md-4">
                    <img className="image" src={casatta.image} />
                </div>
                <div className="col-md-6 explain">
                    <h6>{casatta.description}</h6>
                </div>
            </div>
        );
    }
}