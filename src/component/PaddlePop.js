import React from 'react';
import './component.css';
import {paddlePop} from './../app/constants/Application';

export default class PaddlePop extends React.Component {

    render () {
        return (
            <div className="row">
                <div className="col-md-4">
                    <img className="image" src={paddlePop.image} />
                </div>
                <div className="col-md-6 explain">
                    <h6>{paddlePop.description}</h6>
                </div>
            </div>
        );
    }
}