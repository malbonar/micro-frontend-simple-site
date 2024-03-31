import React from 'react';
import { mount } from 'marketing/Marketing';
import PageMount from './shared/PageMount';

export const MarketingAppComponent = () => {
    const bob = 'bob';
    return <PageMount mount={mount} />
}

