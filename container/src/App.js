import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { MarketingAppComponent } from './components/MarketingAppComponent';
import { AuthAppComponent } from './components/AuthAppComponent';
import Header from './components/Header';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/auth" component={AuthAppComponent} />
                <Route path="/" component={MarketingAppComponent} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
