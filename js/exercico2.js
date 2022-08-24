// Exemplo 1
function exemplo1() {
    const avatarContentElement = document.querySelector('div.avatar-content');
    
    const newHTML = avatarContentElement.innerHTML.replaceAll('div', 'strong');
    
    avatarContentElement.innerHTML = newHTML;
}

// Exemplo 2
function exemplo2() {
    const usernameDivElement = document.querySelector('div.avatar-content div');
    
    // <strong></strong>
    const usernameStrongElement = document.createElement('strong');
    
    usernameStrongElement.innerHTML = 'Nome Usuário';
    // <strong>Nome Usuário</strong>
    
    usernameDivElement.replaceWith(usernameStrongElement);
    // <div>Nome Usuário</div> -> <strong>Nome Usuário</strong>
}

// Exemplo 3
function exemplo3() {
    const avatarContentElement = document.querySelector('div.avatar-content');

    // <div>Nome Usuário</div>
    const usernameDivElement = document.querySelector('div.avatar-content div');

    // <strong></strong>
    const usernameStrongElement = document.createElement('strong');
    
    usernameStrongElement.innerHTML = usernameDivElement.innerHTML;
    // <strong>Nome Usuário</strong>

    avatarContentElement.replaceChild(usernameStrongElement, usernameDivElement);
    // <div>Nome Usuário</div> -> <strong>Nome Usuário</strong>
}

exemplo3();
