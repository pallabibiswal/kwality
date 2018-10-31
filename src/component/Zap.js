import React from 'react';
import './component.css';
import {zap} from './../app/constants/Application';

export default class Zap extends React.Component {

    render () {
        return (
            <div className="row">
                <div className="col-md-4">
                    <img  className="image" src={zap.image} />
                </div>
                <div className="col-md-6 explain">
                    <h6>{zap.description}</h6>
                </div>
            </div>
        );
    }
}