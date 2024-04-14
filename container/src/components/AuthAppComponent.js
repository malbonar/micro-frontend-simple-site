import React from 'react';
import { mount } from 'authentication/Auth';
import PageMount from './shared/PageMount';

const AuthAppComponent = ({ onSignIn}) => {
    return <PageMount mount={mount} onSignIn={onSignIn} />
}

export default AuthAppComponent;