import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles'
import Landing from './components/Landing';
import Pricing from './components/Pricing';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


export default () => {
    return (
        <StylesProvider>
            <BrowserRouter>
                <Switch> 
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    );
}