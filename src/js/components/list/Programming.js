import React from 'react';

export default function Programming(props) {
    const { title, detail, link, image } = props;
    return (
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 list__contents-programming">
            <div class="row no-gutters">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <img src={image} class="card-img" />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{detail}</p>
                        <a href={link} target='_blank' class="card-text"><small class="text-muted">詳細リンク</small></a>
                    </div>
                </div>
            </div>
        </div>
    );
}