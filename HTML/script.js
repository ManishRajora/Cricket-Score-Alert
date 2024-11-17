const main = document.querySelector('.main');
const login_form = document.querySelector('.login_form');
const register_form = document.querySelector('.register_form');
const login_btn = document.querySelector('.login_btn');
const register_btn = document.querySelector('.register_btn');
const register_btn2 = document.querySelector('.register_btn2');
const home = document.querySelector('.logo');

const open_login_form = function(){
    main.style.display = 'none';
    register_form.style.display = 'none';
    login_form.style.display = 'block';
}

const open_register_form = function(){
    main.style.display = 'none';
    login_form.style.display = 'none';
    register_form.style.display = 'block';
}

const reach_to_home = function(){
    login_form.style.display = 'none';
    register_form.style.display = 'none';
    main.style.display = 'block';
}

login_btn.addEventListener('click', open_login_form);
register_btn.addEventListener('click', open_register_form);
register_btn2.addEventListener('click', open_register_form);
home.addEventListener('click', reach_to_home);
