import React from 'react';

export default class Introduction extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 aboutContent__icon">
                    <img src="./img/icons/icon.jpg" />
                </div>
                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <h2>
                        ぱちお
                        <div class="aboutContent__socialIcon">
                            <a href="https://twitter.com/patioglass" target="_blank">
                                <img src="/img/icons/Twitter_Social_Icon_Circle_Color.png" />
                            </a>
                            <a href="https://www.pixiv.net/member.php?id=2188539" target="_blank">
                                <img src="/img/icons/logo_icon_r.png" />
                            </a>
                            <a href="https://github.com/patioglass/" target="_blank">
                                <img src="/img/icons/GitHub-Mark-64px.png" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCfU65jQv5ROfAsjDQM8Vqmw?view_as=subscriber" target="_blank">
                                <img src="/img/icons/youtube_social_circle_red.png" />
                            </a>
                            <a href="https://www.instagram.com/patioglass/?hl=ja" target="_blank">
                                <img src="/img/icons/glyph-logo_May2016.png" />
                            </a>
                        </div>
                    </h2>
                    <hr />
                    <p>サークル名「PatioGlass」で活動中。</p>
                    <p>
                        はじめまして、ぱちお(patio)です。いろいろ作っています。二次創作多めで百合やらNLが好き。好きな作品はかなり雑食です。メインはVOCALOID、東方、艦これ、まどマギ、プリキュアあたり。
                        <br />
                        Youtubeではギター動画あげたり、VTuberゆあちゃんで時々います。
                    </p>                  
                </div>
            </div>
        );
    }
}