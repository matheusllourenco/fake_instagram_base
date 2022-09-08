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
            return value.length > 2 && value.length < 15;
        default: 
            return true;
    }
}

function registerUser(data) {
    console.log(data);
    /** Chamar api */
}

formRegisterElement.onsubmit = (event) => {
    event.preventDefault();

    const { name , email, password, surname, username } = formRegisterElement;
    
    const userData = { name , email, password, surname, username };

    let isFormInvalid = false;

    Object.keys(userData).forEach(key => {
        const input = userData[key];
        const spanElement = input.nextElementSibling;
        const isValid = isInputValid(input.name, input.value.trim());

        if(!isValid) {
           isFormInvalid = true;
           spanElement.style.display = 'block';
           spanElement.innerHTML = `Campo ${input.name} vazio`;
           
           return;
        }

        spanElement.style.display = 'none';        
    });

    if(isFormInvalid) {
        return;
    }

    console.log('enviando para api....');

    const payload = {
        name: userData.name.value,
        surname: userData.surname.value,
        username: userData.username.value,
        email: userData.email.value,
        password: userData.password.value,
    }

    registerUser(payload);
    // const inputs = [...formRegisterElement];

    // console.log(inputs);

    // inputs.forEach(input => {
    //     if(!input.value.trim().length) {
    //         alert(`Campo ${input.name} vazio`);
    //     }
    // })
}