const getData = () => {
    const dataPageWrap = document.getElementById('dataPageWrap');
    fetch('../../db.json').
    then(res => res.json()).
    then(data => {
        data.contactForm.reverse();
        return data.contactForm.forEach(d => {

            dataPageWrap.insertAdjacentHTML('afterbegin', `
            <div>
            <span>${d.id})</span>
            <span>Имя: </span> _________ <span>${d.fieldName}</span>
            </div>
            <div>
            <span>Телефон: </span> ________ <span>${d.fieldPhone}</span>
            </div>
            <div>
            <span>Сообщение: </span> ______ <span>${d.fieldMessage}</span>
            </div>
            <br>
            `);
        })
    });
}

export default getData;