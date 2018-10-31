import React from 'react';
import './component.css';
import {cornetto} from './../app/constants/Application';

export default class Cornetto extends React.Component {

    render () {
        return (
            <div className="row">
                <div className="col-md-4">
                    <img src={cornetto.image} />
                </div>
                <div className="col-md-8 explain">
                    <h6>{cornetto.description}</h6>
                </div>
            </div>
        );
    }
}