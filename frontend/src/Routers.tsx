import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateOrphanage from './Pages/CreateOrphanage';
import Landing from './Pages/Landing';
import ListOrphanage from './Pages/ListOrphanage';
import Login from './Pages/Login';
import OrphanagesMap from './Pages/OrphanagesMap';

const Routers: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact component={Landing} path="/" />
            <Route component={OrphanagesMap} path="/map" />
            <Route component={CreateOrphanage} path="/orphanage/create" />
            <Route component={ListOrphanage} path="/orphanage/show/:id" />
            <Route component={Login} path="/login" />
        </Switch>
    </BrowserRouter>
);

export default Routers;
