import React from 'react';

export const Container = (props: {
    children: JSX.Element | JSX.Element[],
    style?: React.CSSProperties
}) => {
    return (
        <div className="container" style={ props.style } >
            { props.children }
        </div>
    );
};