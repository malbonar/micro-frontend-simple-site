import React, { useEffect, useRef } from 'react';
import {useHistory } from 'react-router-dom';

const PageMount = (props) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const paramObject = {
            // when we first load the module set the initial path to current path
            // so that the memory router of the child module knows if we're not at / root
            initialPath: history.location.pathname,
            // sync container browser route with module federation child component memory route
            onNavigate: ({ pathname: nextPathname}) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        };

        const { onParentNavigate } = props.mount(ref.current, paramObject);

        history.listen(onParentNavigate);
    }, []);

    return (
        <div ref={ref}></div>
    );
}

export default PageMount;
