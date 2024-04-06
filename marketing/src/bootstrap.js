import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();
    if (onNavigate) {
        history.listen(onNavigate);
    }
    ReactDOM.render(
        <App history={history} />,
        el
    );

    return {
        onParentNavigate: ({ pathname }) => {
            const nextPathname = pathname;
            if (history.location.pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const localEl = document.querySelector('#__marketing-dev-root');
    if (localEl) {
        mount(localEl, { defaultHistory: createBrowserHistory() });
    }
}

export { mount }