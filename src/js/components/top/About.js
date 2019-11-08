import React        from 'react';
import AboutItem    from './AboutItem';
import Introduction from './Introduction';

export default function About() {
    const items = [
        {
            'name': 'Illust',
            'detail': '二次創作が多めです。好きな作品/アニメのイラストを中心に描いてます。百合が好き。'
        },
        {
            'name': 'Programming',
            'detail': 'Webエンジニアらしいですが、時々思い付きで何かブラウザゲーとか作ったりサービス作ったりします。'
        },
        {
            'name': 'Music',
            'detail': 'アニメ曲とかをギターでカバーしてます。soundcloudで時々BGM的なものもあげたりしてます。'
        }
    ];

    const itemComponent= items.map((item, index) => {
        return <AboutItem key={index} {...item} />;
    });

    return (
        <div class='aboutContent'>
            <h1><span>About</span></h1>
            <Introduction />
            <div class='row'>
                <ul>
                    {itemComponent}
                </ul>
            </div>
        </div>
    );
}