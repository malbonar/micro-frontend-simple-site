import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { MarketingAppComponent } from './components/MarketingAppComponent';
import Header from './components/Header';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            {/*<Switch>
                <Route exact path="/" component={MarketingAppComponent} />
            </Switch>
        */}
            <MarketingAppComponent />
        </BrowserRouter>
    );
}

export default App;
