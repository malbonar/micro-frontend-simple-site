import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generatedClassNames = createGenerateClassName({
    productionPrefix: 'auth'
});

const App = ({ onSignIn, history }) => {
    return (
        <StylesProvider generateClassName={generatedClassNames}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signup">
                        <SignUp onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    );
}

export default App;