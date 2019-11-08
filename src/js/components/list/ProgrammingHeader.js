import React from 'react';

export default class ProgrammingHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class='list__header'>
                <h1>
                    <span>Programming</span>                
                    <small><p>プログラミング関連</p></small>
                </h1>
                <div class='list__header-text'>
                    <p>
                        公開できているプログラミング制作物です。
                        <br />
                        すでにサービスが止まっている or アクセスできないものは載せないようにしました。
                        <br />
                        Hello Worldのつもりでやったアプリもまぁ制作物でいいよね？
                    </p>
                </div>
            </div>
        );
    }
}