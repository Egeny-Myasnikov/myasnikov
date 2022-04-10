const contactForm = () => {
    const forms = document.querySelectorAll('form');
    const body = {};
    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            formData.append('form-name', form.getAttribute('name'));
            formData.forEach((value, key) => body[key] = value);

            console.log(body);


            fetch('http://localhost:3000/contactForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(body)
            }).
            then((res) => res.json()).
            then(data => console.log(data));
        })
    })






}


export default contactForm;