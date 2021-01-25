import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (



            <header className="background">
            
                
                <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active"> HOME </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nuevo-contacto" activeClassName="active" > NUEVO CONTACTO</NavLink>
                        </li>
                       
                    </ul>
                </nav>
                <div className="header">
                <img  src={"https://image.flaticon.com/icons/png/512/1316/1316611.png"}></img>
                </div>
            </header>
        );
    }
}

export default Header;