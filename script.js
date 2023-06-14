let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }
    else{
        menu.classList.add('hidden')
    }
})

