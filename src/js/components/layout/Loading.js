import React from 'react';

export default class Loading extends React.Component {
    render() {
        return (
            <div class='loading'>
                <div class='loading__animation'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    }
}