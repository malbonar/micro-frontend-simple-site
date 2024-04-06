import React, { useEffect, useRef } from 'react';
import {useHistory } from 'react-router-dom';

const PageMount = (props) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = props.mount(ref.current, { 
            // sync container browser route with module federation child component memory route
            onNavigate: ({ pathname: nextPathname}) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigate);
    }, []);

    return (
        <div ref={ref}></div>
    );
}

export default PageMount;
