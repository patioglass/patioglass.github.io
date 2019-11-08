import React from 'react';

export default class Music extends React.Component {
    render() {
        const { title, url } = this.props;

        return (
            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 list__contents-music'>
                <iframe
                    src={url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <h4>{title}</h4>
            </div>
        );
    }
}