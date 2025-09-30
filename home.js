let menuS = document.getElementById('menuS');
let navbar = document.getElementById('navbar');

menuS.addEventListener('click', ()=>{
    navbar.classList.toggle('show');
    menuS.classList.toggle('hide')
}); 

document.getElementById('Video').addEventListener('click', function(){
    this.innerHTML = `<iframe src="https://www.youtube.com/embed/2Qfuj6reHQ8?autoplay=1&modestbranding=1&rel=0" allow="autoplay; encrypted-media"
                allowfullscreen></iframe>`;
});