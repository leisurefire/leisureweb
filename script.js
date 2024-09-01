document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    document.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const banner = document.querySelector('#banner');
        const banner_container = document.querySelector('#banner_container');
        const about = document.querySelector('#about');
        const mainNav = document.querySelector('.main_navigation_container');

        if (scrollTop === 0) {
            mainNav.style.backgroundColor = 'transparent';
            mainNav.style.boxShadow = 'none';
            mainNav.style.transform = 'rotateX(0deg)';
        }
        else if (scrollTop <= banner_container.offsetHeight) {
            const scrollRatio = scrollTop / banner_container.offsetHeight;
            const backgroundSize = 100 + scrollRatio * 60;

            banner_container.style.backgroundSize = `${backgroundSize}%`;
            mainNav.style.backgroundColor = 'rgba(255,255,255,.8)';
            mainNav.style.boxShadow = 'rgba(0,0,0,.1) 0 1px';

            banner_container.style.opacity = `${1.6 - scrollRatio * 1.6}`;
            banner_container.style.transform = `scale(${1 - scrollRatio * 0.12})`;
            about.style.marginTop = `${- scrollRatio * 16}rem`;
        }
    });
});