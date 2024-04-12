import React from 'react';
import { mount } from 'authentication/Auth';
import PageMount from './shared/PageMount';

export const AuthAppComponent = () => {
    return <PageMount mount={mount} />
}