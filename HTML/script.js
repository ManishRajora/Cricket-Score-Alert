const main = document.querySelector('.main');
const login_form = document.querySelector('.login_form');
const login_btn = document.querySelector('.login_btn');

const open_form = function(){
    main.style.display = 'none';
    login_form.style.display = 'block';
}

login_btn.addEventListener('click', open_form);
