import contactForm from './modules/contactForm.js';
import getData from './modules/getData.js';
import auth from './modules/auth.js';
import {
    portfolioFilter
} from './modules/filters.js';
import createMenu from './modules/menu.js';




window.requestAnimationFrame(function () {
    //подключения  
    createMenu('._general-container');
    contactForm();
    document.location.pathname === '/dataPage.html' && getData();
    auth('.menu');
    //___

    portfolioFilter({
        arrBtns: '.filter > button',
        arrWorks: '.my-works > .work'
    });



})

















// Изменение размера шрифта

/*// const changeFontSize = () => {
//     const DEFAULT_SIZE = window.getComputedStyle(document.body, null).getPropertyValue('font-size').slice(0, -2);
//     const incr = document.querySelector('.incr');
//     const decr = document.querySelector('.decr');
//     const defaultSize = document.querySelector('.defaultSize');
//     let currentFontSize = DEFAULT_SIZE;
//     const changeSize = (selector) => {
//         selector.addEventListener('click', () => {
//             if (selector === incr) {
//                 ++currentFontSize;
//                 document.body.style.fontSize = `${currentFontSize}px`
//             } else if (selector === defaultSize) {
//                 currentFontSize = DEFAULT_SIZE
//                 document.body.style.fontSize = `${currentFontSize}px`
//             } else {
//                 --currentFontSize;
//                 document.body.style.fontSize = `${currentFontSize}px`
//             }
//         })
//     }
//     changeSize(incr);
//     changeSize(defaultSize);
//     changeSize(decr);
// }
// changeFontSize();*/

// ____///Изменение размера шрифта




//------------------more
const sectionPortfolioMore = () => {
    const more = document.querySelector('.more');
    const toggle = document.querySelector('.toggle');
    const svg = toggle.querySelector('.toggle > svg');
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        more.classList.toggle('active');
        svg.classList.toggle('_svg-dark');
    })

    const list = more.querySelectorAll('li');

    function activeLink() {
        list.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach(item => item.addEventListener('click', activeLink));
}

// sectionPortfolioMore();
//------------------more