const auth = (place) => {
    const btn = document.querySelector('.header-logo');
    const navigation = document.querySelector(place);
    btn.addEventListener('click', () => {
        localStorage.getItem('auth') === 'reg' ? localStorage.setItem('auth', 'no-reg') : localStorage.setItem('auth', 'reg')

        document.location.reload();
    })

    if (localStorage.getItem('auth') === 'reg') {
        const a = document.createElement('a');
        if (document.location.pathname !== '/dataPage.html') {
            a.href = './dataPage.html';
            a.textContent = 'заявки';
        } else {
            a.href = './';
            a.textContent = 'На главную';
        }
        navigation.append(a);
    }
}

export default auth