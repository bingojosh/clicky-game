import React from 'react';

export function Card(props) {

    return(
        <div className="card d-inline-block p-1 m-3" onClick={() => props.handleClick(props.clicked, props.url)}>
            <img className="card-img h-100" src={props.url} alt="The Fonz" />
        </div>
    );
}