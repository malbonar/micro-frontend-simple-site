import React, { lazy, Suspense, useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

const MarketingApp = lazy(() => import('./components/MarketingAppComponent'));
const AuthApp = lazy(() => import('./components/AuthAppComponent'));

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <BrowserRouter>
            <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
            <Suspense fallback={null}>
                <Switch>
                    <Route path="/auth">
                        <AuthApp onSignIn={() => setIsSignedIn(true) } />
                    </Route>
                    <Route path="/" component={MarketingApp} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
