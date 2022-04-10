export const portfolioFilter = (params) => {
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