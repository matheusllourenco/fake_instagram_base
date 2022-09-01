function exercico1() {
    const card = document.querySelector('.card').cloneNode(true);
    
    const cardsDiv = document.getElementById('cards');
    const moreButton = document.getElementById('more');
    
    moreButton.onclick = () => {
        cardsDiv.insertAdjacentElement('beforeend', card);

    }
}

function exercico2() {
    const heartBlank = document.querySelector('.like');
    const likesDivElement = document.querySelector('.likes');

    // heartBlank.onclick = () => {
    //     const isHeartRed = heartBlank.src.includes('red');

    //     const newPath = isHeartRed  ? 'icons/heart.svg': 'red-heart.png';

    //     heartBlank.src = `./img/${newPath}`;
    // }

    const likeImgs = document.querySelectorAll('.likes img')
    
    likesDivElement.onclick = () => {
        likeImgs.forEach((like) => {
            like.classList.toggle('is-visible');
        });
    }
}

function extra() {
    const cardsDivElement = document.getElementById('cards');

    cardsDivElement.onclick = (event) => {
        const itemClicked = event.target;

        if(itemClicked.classList.contains('like')) {
            const isHeartRed = itemClicked.src.includes('red');

            const newPath = isHeartRed  ? 'icons/heart.svg': 'red-heart.png';

            itemClicked.src = `./img/${newPath}`;
        }
    }
}

function exercico3() {
    const searchDivElement = document.querySelector('.busca');

    searchDivElement.onmouseover = () => {
        searchDivElement.style.boxShadow = '0px 1px 3px black';
    }

    searchDivElement.onmouseout = () => {
        searchDivElement.style.boxShadow = 'none';
    }
}

exercico1();
exercico3();
extra();
