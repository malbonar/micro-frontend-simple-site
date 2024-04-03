import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Landing from './components/Landing';
import Pricing from './components/Pricing';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

// prevent this module and another e.g. container having the same shortened class names in prod
const generatedClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

export default () => {
    return (
        <StylesProvider generateClassName={generatedClassName}>
            <BrowserRouter>
                <Switch> 
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    );
}