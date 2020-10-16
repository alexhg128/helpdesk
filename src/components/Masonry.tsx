import React from 'react';

export const Masonry = (props: { children: JSX.Element[] }) => {
    return (
        <div className="card-columns">
            { props.children }
        </div>
    );
};