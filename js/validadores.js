const formRegisterElement = document.querySelector('form.form-auth');
const inputsForm = document.querySelectorAll('form.form-auth input');

inputsForm.forEach((input) => {
    input.insertAdjacentHTML('afterend', '<span class="error" style="display:none">Campo incorreto</span>');
});

function isInputValid(name, value) {
    if(!value.length) {
        return false;
    }

    switch(name) {
        case 'name':
            return value.length > 2 && value.length < 80;
        case 'surname':
            return value.length > 2 && value.length < 100;
        case 'username':
            return value.length > 10 && value.length < 15;
        default: 
            return false;
    }
}

formRegisterElement.onsubmit = (event) => {
    event.preventDefault();

    const { name , email, password, surname, username } = formRegisterElement;
    
    const inputs = [ name , email, password, surname, username];
    
    inputs.forEach(input => {
        const spanElement = input.nextElementSibling;
        const isValid = isInputValid(input.name, input.value.trim());

        if(!isValid) {
           spanElement.style.display = 'block';
           spanElement.innerHTML = `Campo ${input.name} vazio`;
        }else {
           spanElement.style.display = 'none';
        }
    })

    // const inputs = [...formRegisterElement];

    // console.log(inputs);

    // inputs.forEach(input => {
    //     if(!input.value.trim().length) {
    //         alert(`Campo ${input.name} vazio`);
    //     }
    // })
}