import React from 'react';
import './component.css';
import {magnum} from './../app/constants/Application';

export default class Magnum extends React.Component {

    render () {
        return (
            <div className="row">
                <div className="col-md-4">
                    <img className="image" src={magnum.image} />
                </div>
                <div className="col-md-6 explain">
                    <h6>{magnum.description}</h6>
                </div>
            </div>
        );
    }
}