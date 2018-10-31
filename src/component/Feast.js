import React from 'react';
import './component.css';
import {feast} from './../app/constants/Application';

export default class Feast extends React.Component {

    render () {
        return (
            <div className="row">
                <div className="col-md-4">
                    <img className="image" src={feast.image} />
                </div>
                <div className="col-md-6 explain">
                    <h6>{feast.description}</h6>
                </div>
            </div>
        );
    }
}