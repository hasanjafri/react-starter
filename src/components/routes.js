import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/home';
import SimpleTable from './views/table';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/receipts" exact component={SimpleTable}/>
        </Switch>
    )
}

export default Routes;