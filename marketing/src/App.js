import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Landing from './components/Landing';
import Pricing from './components/Pricing';

// prevent this module and another e.g. container having the same shortened class names in prod
const generatedClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

export default ({ history }) => {
    return (
        <StylesProvider generateClassName={generatedClassName}>
            <Router history={history}>
                <Switch> 
                    <Route path="/pricing" component={Pricing} />
                    <Route exact path="/" component={Landing} />
                </Switch>
            </Router>
        </StylesProvider>
    );
}