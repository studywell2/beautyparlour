let menu = document.getElementById('burger');
let bar = document.getElementById('mainNav');

menu.addEventListener('click', function() {
  menu.classList.toggle("is-active");
  bar.classList.toggle("is-active");
});


let paragraphs = document.querySelectorAll(".para");
let circleNumber = document.querySelectorAll(".circle");
let count = 0;
let timer;

function showMessage(love) {
  paragraphs.forEach((p, i) => {
    p.classList.toggle("active", i === love);
  });

  circleNumber.forEach((c, i) => {
    c.classList.toggle("active", i === love);
  });

  count = love;
}

function authoStart() {
  timer = setInterval(() => {
    let young = (count + 1) % paragraphs.length; // lowercase "young"
    showMessage(young);
  }, 7000);
}

circleNumber.forEach(circle => {
  circle.addEventListener("click", () => {
    clearInterval(timer);
    showMessage(parseInt(circle.dataset.love));
    authoStart(); // match function name
  });
});

authoStart();


if (window.innerWidth > 768) {
  document.querySelector(".circles").style.display = "flex";
} else {
  document.querySelector(".circles").style.display = "none";
}



let thumb = document.getElementById("thumb");

thumb.addEventListener('click', ()=>{
  thumb.style.transition = "transform 0.3s ease";
  thumb.style.transform = "scale(1.3)";
  thumb.style.color = "blue";

  setTimeout(()=>{
    thumb.style.transform = "scale(1)";
  }, 300);
});
