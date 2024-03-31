import React, { useEffect, useRef } from 'react';

const PageMount = (props) => {
    const ref = useRef(null);

    useEffect(() => {
        props.mount(ref.current);
    });

    return (
        <div ref={ref}></div>
    );
}

export default PageMount;
