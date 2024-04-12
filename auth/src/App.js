import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generatedClassNames = createGenerateClassName({
    productionPrefix: 'auth'
});

const App = ({ history }) => {
    return (
        <StylesProvider generateClassName={generatedClassNames}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin" component={SignIn} />
                    <Route path="/auth/signup" component={SignUp} />
                </Switch>
            </Router>
        </StylesProvider>
    );
}

export default App;