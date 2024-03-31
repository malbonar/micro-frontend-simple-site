import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
}

if (process.env.NODE_ENV === 'development') {
    const localEl = document.querySelector('#__marketing-dev-root');
    if (localEl) {
        mount(localEl);
    }
}

export { mount }