import React   from 'react';
import NavItem from './NavItem';

export default function Nav() {
    const navList = [
        {
            name: 'ぱちおのお部屋',
            href: '/',
            dropdown: []
        },
        {
            name: 'Illust',
            href: '/list/Illust/' + new Date().getFullYear(),
            dropdown: []    
        },
        {
            name: 'Programming',
            href: '/list/Programming',
            dropdown: []    
        },
        {
            name: 'Music',
            href: '/list/Music',
            dropdown: []    
        }
    ];

    const navItems = navList.map((item, index) => {
        return <NavItem key={index} item={item} />
    })
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <button class="navbar-toggler" type="button" 
                data-toggle="collapse" 
                data-target="#navbarResponsive" 
                aria-controls="navbarResponsive" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    {navItems}
                </ul>
            </div>
        </nav>
    );
}