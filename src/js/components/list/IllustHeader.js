import React from 'react';

export default class IllustHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class='list__header'>
                <h1>
                    <span>Illust</span>
                    <small><p>イラストレーション</p></small>
                </h1>
                
                <div class='list__header-text'>
                    <p>
                        転載などに関しては一度連絡していただければ問題ないです。
                        <br />
                        アイコン制作や表紙依頼などについて、
                        <br />
                        pixiv/Twitter/メールどれかの媒体で連絡いただければと思います。
                    </p>
                    <p>
                        もっと見たい場合→<a href='https://www.pixiv.net/member.php?id=2188539' target='_blank'>https://www.pixiv.net/member.php?id=2188539</a>
                    </p>
                </div>
            </div>
        );
    }
}