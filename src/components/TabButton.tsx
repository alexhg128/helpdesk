import { type } from 'os';
import React from 'react';

export const TabButton = (props: {
    type: string,
    callback: () => void,
    count: number,
    children: string
}) => {
    return (
        <button type="button" className={ "btn btn-" + props.type } onClick={ props.callback } style={{
            marginLeft: "10px",
            marginRight: "10px"
        }}>
                { props.children } <span className="badge badge-light">{ props.count }</span>
        </button>
    );
}