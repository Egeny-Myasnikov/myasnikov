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
//------------------scroll
const scroll = (listSelector) => {
    const elements = document.querySelectorAll(listSelector);
    elements.forEach(el => el.addEventListener('click', function (e) {
        e.preventDefault();
        const id = el.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        section && section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        elements.forEach(el => el.classList.remove('active'))
        this.classList.add('active');
    }));
}

function triger(listSelector) {
    const elements = document.querySelectorAll(listSelector);
    elements.forEach(el => {
        const id = el.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        const sec = Math.floor(section.getBoundingClientRect().y);
        if (sec < 20 && sec > -20) {
            elements.forEach(el => el.classList.remove('active'))
            el.classList.add('active');
        }
    });
}
const portfolioFilter = (params) => {
    const filterBtns = document.querySelectorAll(params.arrBtns);
    const works = document.querySelectorAll(params.arrWorks);
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(btnAll => btnAll.classList.remove('active'));
            btn.classList.add('active');
            works.forEach(work => {
                work.classList.add('_hidden');
                (btn.dataset.category === work.dataset.category || btn.dataset.all === work.dataset.all) && work.classList.remove('_hidden');
            })
        })

    })

}

window.requestAnimationFrame(function () {
    portfolioFilter({
        arrBtns: '.filter > button',
        arrWorks: '.my-works > .work'
    });
    scroll('.navigation>.item>a');
    window.addEventListener('scroll', function (e) {
        window.requestAnimationFrame(function () {
            triger('.navigation>.item>a');
        })

    });
})


















// const menuItemsBody = {
//     href: '#new',
//     text: 'NewPage'
// }

// fetch('/js/db.json').
// then(res => res.json()).
// then(data => data.forEach(el => console.log(el)))

// fetch('http://localhost:3000/posts', {
//     method: 'POST',
//     body: JSON.stringify(menuItemsBody),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     }
// }).then(res => res.json())


// const stringData = JSON.stringify(data);
// console.log(stringData);
// const objData = JSON.parse(stringData);
// console.log(objData);
// const jsonData = objData.json();
// console.log(jsonData);