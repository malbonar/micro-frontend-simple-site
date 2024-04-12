import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
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
    const el = document.getElementById('__auth_dev_root');
    if (el) {
        mount(el, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };