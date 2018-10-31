import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import './container.css';
import {menus, logo, routeComponent} from '../app/constants/Application';
import CornettoTypes from './../component/CornettoTypes';

 const NavHeader = (props) => {

    const RenderLi = Object.keys(menus).map((key, index) => {
        return (<li key={index} className="nav-item active">
            <Link className="navbar-brand" to={key}>
                <img src={menus[key]} />
            </Link>
        </li>);
    });

    const RenderRouters = Object.keys(routeComponent).map((path, index) => {
        return (<Route key={index}  path={path} component={routeComponent[path]}/>);
    });

    return (
        <div>
            <h2 className="kwality-heading"><img className="kwality-logo" src={logo}/></h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {RenderLi}
                    </ul>
                </div>
            </nav>

                {RenderRouters}
                <Route exact path="/types" component={CornettoTypes} />
        </div>
    );

};
export default NavHeader