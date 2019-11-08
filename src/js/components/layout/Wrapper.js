import React from 'react';

export default function Wrapper(props) {
    return (
        <section class='wrapper'>
             {props.children}
        </section>
    );
}