import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateOrphanage from './Pages/CreateOrphanage';
import Landing from './Pages/Landing';
import OrphanagesMap from './Pages/OrphanagesMap';


const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact component={Landing} path='/' />
                <Route component={OrphanagesMap} path='/map' />
                <Route component={CreateOrphanage} path='/createOrphanage' />
            </Switch>
        </BrowserRouter>
    );
}

export default Routers;