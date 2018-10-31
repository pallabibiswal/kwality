import React from 'react';
import {Link} from "react-router-dom";
import './container.css';
import {menus, logo, routeComponent} from '../app/constants/Application';

 const NavHeader = () => {

    const RenderLi = Object.keys(menus).map((key, index) => {
        return (<li key={index} className="nav-item active">
            <Link className="navbar-brand" to={key}>
                <img src={menus[key]} />
            </Link>
        </li>);
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
        </div>
    );

};
export default NavHeader