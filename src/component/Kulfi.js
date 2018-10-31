import React from 'react';
import './component.css';
import {kulfi} from './../app/constants/Application';

export default class Kulfi extends React.Component {

    render () {
        return (
            <div className="row">
                <div className="col-md-4">
                    <img className="image" src={kulfi.image} />
                </div>
                <div className="col-md-6 explain">
                    <h6>{kulfi.description}</h6>
                </div>
            </div>
        );
    }
}