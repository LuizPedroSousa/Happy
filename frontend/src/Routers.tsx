import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Pages/Landing';


const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Landing} path='/' />
            </Switch>
        </BrowserRouter>
    );
}

export default Routers;