import React from 'react';
import { mount } from 'marketing/Marketing';
import PageMount from './shared/PageMount';

export const MarketingAppComponent = () => {
    const bump = 'commit to trigger a build...';
    return <PageMount mount={mount} />
}

