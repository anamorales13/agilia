import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Slider from './components/Slider';
import Users from './components/Users';
import nuevo from './components/NuevoUser';
import Footer from './components/Footer';

class Rutas extends Component {
    render() {

        return (


            <BrowserRouter>
        
                <Header />
                          
                <Switch> 
                    <Route exact path="/" component={Users} />
                  
                  <Route exact path="/nuevo-contacto" component={nuevo}/>
                    


                </Switch>
<Footer/>
                <div className="clearfix"></div>


            </BrowserRouter>
        );
    }
}

export default Rutas; 