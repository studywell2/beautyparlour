let study = document.getElementById('stufr');
let muyiwa = document.getElementById('stuffer');

study.addEventListener('click', function() {
   muyiwa.classList.toggle('show');
});


let trash = document.getElementById('trashi');

trash.addEventListener('mouseenter', ()=>{
   trash.style.color = "red";
   trash.style.transform = "rotate(-15deg)";
});

trash.addEventListener('mouseleave', ()=>{
   trash.style.color = "gray";
   trash.style.transform = "rotate(0deg)";
});

 const nameinput = document.getElementById('name');
  const space = document.getElementById('space');

  nameinput.addEventListener('blur', () => {
    const value = nameinput.value.trim();
    const parts = value.split(" ").filter(p => p !== ""); // separate words

    if (value === "") {
      nameinput.classList.add('border-danger');
      space.textContent = "Name is required";
    } else if (parts.length < 2) {
      nameinput.classList.add('border-danger');
      space.textContent = "Enter a valid full name";
      space.style.color = 'red';
    } else {
      nameinput.classList.remove('border-danger');
      space.textContent = "";
    }
  });

  // Optional: remove error while typing
  nameinput.addEventListener('input', () => {
    if (nameinput.value.trim().split(" ").filter(p => p !== "").length >= 2) {
      nameinput.classList.remove('border-danger');
      space.textContent = "";
    }
  }); 


  let email = document.getElementById('email');
  let inputEmail = document.getElementById('Email');

  email.addEventListener('blur', ()=>{
   const value = email.value.trim();
   const parts = value.split(" ").filter(p=> p !== "");

   if(value ==""){
    email.classList.add('border-danger');
    inputEmail.textContent = "Email is required";  
   }else if(parts.length <2){
   email.classList.add('border-danger');
   inputEmail.textContent = "Enter a valid email";
   inputEmail.style.color = 'red';
   }else{
      email.classList.remove('border-danger');
      inputEmail.textContent = "";
   };
  });



  let card = document.getElementById('card');
  let inputcard = document.getElementById('Card');

  card.addEventListener('blur', ()=>{
   const value = email.value.trim();
   const parts = value.split(" ").filter(p=> p !== "");

   if(value ==""){
    card.classList.add('border-danger');
    inputcard.textContent = "Card is required";  
   }else if(parts.length <2){
   card.classList.add('border-danger');
   inputcard.textContent = "Enter a valid email";
   inputcard.style.color = 'red';
   }else{
      card.classList.remove('border-danger');
      inputcard.textContent = "";
   };
  });


  const input = document.getElementById('countryInput');
    const dropdown = document.getElementById('dropdownBox');

    // toggle dropdown when clicking input
    input.addEventListener('click', () => {
      dropdown.classList.toggle('show');
    });

    // select a country
    dropdown.querySelectorAll('div').forEach(option => {
      option.addEventListener('click', () => {
        input.value = option.textContent;
        dropdown.classList.remove('show');
      });
    });

    // close dropdown if clicked outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.looh')) {
        dropdown.classList.remove('show');
      }
    });


   let addressField = document.getElementById('addressField');
   let companyField = document.getElementById('companyField');
   let check = document.getElementById('address4');

check.addEventListener('change', () => {
  if (check.checked) {
    addressField.style.display = 'block';
    companyField.style.display = 'block';
  } else {
    addressField.style.display = 'none';
    companyField.style.display = 'none'; 
  }
});



  const funnyBox = document.getElementById("funny-box");
  const wrapper = document.getElementById("cum");
  const countryInput = document.getElementById("monthInput");

  // Toggle dropdown when container is clicked
  wrapper.addEventListener("click", function () {
    funnyBox.style.display = funnyBox.style.display === "none" ? "block" : "none";
  });

  // Set input value when a month is clicked
  const items = funnyBox.querySelectorAll(".dropdown-month");
  items.forEach(item => {
    item.addEventListener("click", function () {
      countryInput.value = this.textContent; // ✅ this now updates the input
      funnyBox.style.display = "none";
    });
  });

  // Optional: close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!wrapper.contains(e.target)) {
      funnyBox.style.display = "none";
    }
  });


let year = document.getElementById('funny-cut');
let school = document.getElementById('Nin');
let yearInput = document.getElementById('yearInput')


school.addEventListener('click', function (){
  year.style.display = year.style.display === "none" ? "block" : "none";
});



const tros = year.querySelectorAll(".dropdown-year");
  tros.forEach(tro => {
    tro.addEventListener("click", function () {
      yearInput.value = this.textContent; // ✅ this now updates the input
      year.style.display = "none";
    });
  });


  document.addEventListener("click", function (e) {
    if (!school.contains(e.target)) {
      year.style.display = "none";
    }
  });


  document.getElementById('paymentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const country = document.getElementById('countryInput').value.trim();
  const card = document.getElementById('card').value.trim();
  const month = document.getElementById('monthInput').value.trim();
  const year = document.getElementById('yearInput').value.trim();
  const security = document.getElementById('security').value.trim();

  if (!name || !email || !country || !card || !month || !year || !security) {
    alert('Please fill in all required fields!');
    return;
  }

  const btn = document.getElementById('placeorder');
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Processing Order...`;

  setTimeout(() => {
    window.location.href = "form.html";
  }, 2000);
});

// Toggle company field
document.getElementById('address4').addEventListener('change', function() {
  const company = document.getElementById('companyField');
  company.style.display = this.checked ? 'block' : 'none';
});