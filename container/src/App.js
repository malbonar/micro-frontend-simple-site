import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { MarketingAppComponent } from './components/MarketingAppComponent';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MarketingAppComponent} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
