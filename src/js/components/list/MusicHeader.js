import React from 'react';

export default class MusicHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class='list__header'>
                <h1>
                    <span>Music</span>
                    <small><p>音楽関連</p></small>
                </h1>
                <div class='list__header-text'>
                    <p>
                        普段弾いているギター動画と
                        <br />
                        SoundCloudにあげているもの一覧です
                        <br />
                        <small>
                            <a href='https://www.youtube.com/playlist?list=PLB0WX5kHTXFw8GLXn96RymlWG00drxAT6' target='_blank'>Youtube</a>
                            /
                            <a href='https://soundcloud.com/patioglass' target='_blank'>SoundCloud</a>
                        </small>
                    </p>
                </div>
            </div>
        );
    }
}