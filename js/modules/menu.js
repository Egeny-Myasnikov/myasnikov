 const menu = (appendTo) => {
     const linksData = [];
     const wrap = document.querySelector(appendTo);
     const sections = document.querySelectorAll('[data-add-header-menu-path]');
     sections.forEach((section) => {
         linksData.push({
             path: section.dataset.addHeaderMenuPath,
             text: section.dataset.addHeaderMenuText
         })
     });

     const createElement = ({
         ...props
     }) => {
         const el = document.createElement(props.element)
         props.className && el.classList.add(...props.className)
         props.href && (el.href = props.href)
         props.text && (el.textContent = props.text)

         return el
     };

     const createMenu = (el) => {
         const mainMenu = createElement({
             className: ['main-menu'],
             element: 'div',
         });
         const container = createElement({
             className: ['main-menu__container', '_container'],
             element: 'div',
         });
         const navigation = createElement({
             className: ['navigation'],
             element: 'nav',
         });

         const linkArr = linksData.map(link => {
             const item = createElement({
                 element: 'div',
                 className: ['item']
             })
             const a = createElement({
                 element: 'a',
                 href: link.path,
                 text: link.text,
             })
             const decore = createElement({
                 element: 'span',
                 className: ['decore']
             })
             item.append(a, decore)
             return item
         });
         navigation.append(...linkArr);
         container.appendChild(navigation);
         mainMenu.appendChild(container);

         el.insertAdjacentElement('afterbegin', mainMenu);
     }
     createMenu(wrap);
 }

 //------------------scroll
 const scroll = (listSelector) => {
     const elements = document.querySelectorAll(listSelector);

     elements[0].classList.add('active');

     elements.forEach(el => {
         const id = el.getAttribute('href');
         const section = document.getElementById(id);
         el.addEventListener('click', function (e) {
             e.preventDefault();

             section && section.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
             elements.forEach(el => el.classList.remove('active'));
             this.classList.add('active');
         });

         window.addEventListener('scroll', function () {
             const sectionPosition = Math.floor(section.getBoundingClientRect().y);
             if (sectionPosition < 20 && sectionPosition > -20) {
                 elements.forEach(el => el.classList.remove('active'));
                 el.classList.add('active');
             }
         });

     });
 }

 //------------------///scroll






 const addingLinksMenu = () => {
     const sections = document.querySelectorAll('[data-add-header-menu-path]');
     const linksWrap = document.querySelector('.menu-links');

     sections.forEach((section) => {
         const link = document.createElement('a');
         link.classList.add('menu-link');
         link.textContent = section.dataset.addHeaderMenuText;
         link.href = `#${section.dataset.addHeaderMenuPath}`;
         linksWrap.append(link);
     })
 }

 const openingMenu = () => {
     const menu = document.querySelector('.menu');
     const menuLinks = menu.querySelectorAll('.menu-links');
     const burger = menu.querySelector('.burger');

     const showHideMenu = (method) => {
         method === 'remove' ? menu.classList.remove('menu-open') : menu.classList.toggle('menu-open');
         method === 'remove' ? burger.classList.remove('menu-close') : burger.classList.toggle('menu-close');
     }

     menuLinks.forEach(link => link.addEventListener('click', () => showHideMenu('remove')));
     burger.addEventListener('click', () => showHideMenu('toggle'));
     burger.addEventListener('mouseover', () => !(menu.classList.contains('menu-open')) && burger.classList.add('arrow-down'));
     burger.addEventListener('mouseout', () => burger.classList.remove('arrow-down'));

 }

 const createMenu = (insertTo) => {
     const wrapper = document.querySelector(insertTo);
     wrapper.insertAdjacentHTML('afterbegin', `
     <nav class="menu">
            <span class="burger">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
            </span>
            <div class="menu-links">
            </div>

        </nav>
    `);

     addingLinksMenu();
     openingMenu();
 }



 export default createMenu;