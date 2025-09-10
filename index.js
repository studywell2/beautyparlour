let  menu = document.querySelector('.navbar-burger');
let bar = document.getElementById('mainNav');

menu.addEventListener('click', function(){
    menu.classList.toggle("is-active");
    bar.classList.toggle("is-active");
});