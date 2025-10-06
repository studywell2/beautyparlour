document.addEventListener('DOMContentLoaded', () => {

  // Toggle other payment methods
  const study = document.getElementById('stufr');
  const muyiwa = document.getElementById('stuffer');
  if (study && muyiwa) {
    study.addEventListener('click', () => muyiwa.classList.toggle('show'));
  }

  // Trash hover effect
  const trash = document.getElementById('trashi');
  if (trash) {
    trash.addEventListener('mouseenter', () => {
      trash.style.color = 'red';
      trash.style.transform = 'rotate(-15deg)';
    });
    trash.addEventListener('mouseleave', () => {
      trash.style.color = 'gray';
      trash.style.transform = 'rotate(0deg)';
    });
  }

  // Simple validators
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isValidCardNumber = (v) => /^\d{12,19}$/.test(v.replace(/\s+/g, ''));

  const showError = (id, msg) => {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  };
  const clearError = (id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  };

  // Name validation
  const nameInput = document.getElementById('name');
  if (nameInput) {
    nameInput.addEventListener('blur', () => {
      const v = nameInput.value.trim();
      const parts = v.split(/\s+/).filter(Boolean);
      if (!v) { showError('nameError','Name is required'); nameInput.classList.add('border-danger'); }
      else if (parts.length < 2) { showError('nameError','Enter a valid full name'); nameInput.classList.add('border-danger'); }
      else { clearError('nameError'); nameInput.classList.remove('border-danger'); }
    });
    nameInput.addEventListener('input', () => {
      const parts = nameInput.value.trim().split(/\s+/).filter(Boolean);
      if (parts.length >= 2) { clearError('nameError'); nameInput.classList.remove('border-danger'); }
    });
  }

  // Email
  const email = document.getElementById('email');
  if (email) {
    email.addEventListener('blur', () => {
      const v = email.value.trim();
      if (!v) { showError('emailError','Email is required'); email.classList.add('border-danger'); }
      else if (!isValidEmail(v)) { showError('emailError','Enter a valid email'); email.classList.add('border-danger'); }
      else { clearError('emailError'); email.classList.remove('border-danger'); }
    });
    email.addEventListener('input', () => {
      if (isValidEmail(email.value.trim())) { clearError('emailError'); email.classList.remove('border-danger'); }
    });
  }

  // Card input
  const card = document.getElementById('card');
  if (card) {
    card.addEventListener('blur', () => {
      const v = card.value.trim();
      if (!v) { showError('cardError','Card is required'); card.classList.add('border-danger'); }
      else if (!isValidCardNumber(v)) { showError('cardError','Enter a valid card number (digits only)'); card.classList.add('border-danger'); }
      else { clearError('cardError'); card.classList.remove('border-danger'); }
    });
    card.addEventListener('input', () => {
      if (isValidCardNumber(card.value.trim())) { clearError('cardError'); card.classList.remove('border-danger'); }
    });
  }

  // Country fake dropdown
  const countryInput = document.getElementById('countryInput');
  const dropdown = document.getElementById('dropdownBox');
  if (countryInput && dropdown) {
    countryInput.addEventListener('click', (ev) => {
      ev.stopPropagation();
      dropdown.classList.toggle('show');
    });
    dropdown.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        countryInput.value = item.textContent;
        dropdown.classList.remove('show');
        clearError('countryError');
      });
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.looh')) dropdown.classList.remove('show');
    });
  }

  // Address/company toggle (use class toggles so element remains inside container)
  const addressField = document.getElementById('addressField');
  const companyField = document.getElementById('companyField');
  const check = document.getElementById('address4');
  if (check) {
    check.addEventListener('change', () => {
      if (check.checked) {
        if (addressField) { addressField.style.display = 'block'; }
        if (companyField) { companyField.style.display = 'block'; }
      } else {
        if (addressField) { addressField.style.display = 'none'; clearError('addressError'); }
        if (companyField) { companyField.style.display = 'none'; clearError('companyError'); }
      }
    });
  }

  // Month dropdown
  const funnyBox = document.getElementById('funny-box');
  const cum = document.getElementById('cum');
  const monthInput = document.getElementById('monthInput');
  if (cum && funnyBox && monthInput) {
    cum.addEventListener('click', (evt) => {
      // clicked an item?
      if (evt.target.classList.contains('dropdown-month')) {
        monthInput.value = evt.target.textContent;
        funnyBox.style.display = 'none';
      } else {
        funnyBox.style.display = funnyBox.style.display === 'block' ? 'none' : 'block';
      }
    });
    document.addEventListener('click', (e) => {
      if (!cum.contains(e.target)) funnyBox.style.display = 'none';
    });
  }

  // Year dropdown
  const yearBox = document.getElementById('funny-cut');
  const school = document.getElementById('Nin');
  const yearInput = document.getElementById('yearInput');
  if (school && yearBox && yearInput) {
    school.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('dropdown-year')) {
        yearInput.value = evt.target.textContent;
        yearBox.style.display = 'none';
      } else {
        yearBox.style.display = yearBox.style.display === 'block' ? 'none' : 'block';
      }
    });
    document.addEventListener('click', (e) => {
      if (!school.contains(e.target)) yearBox.style.display = 'none';
    });
  }

  // Form submit
  const form = document.getElementById('formorder');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // collect values
      const nameVal = (document.getElementById('name') || {}).value?.trim() || '';
      const emailVal = (document.getElementById('email') || {}).value?.trim() || '';
      const countryVal = (document.getElementById('countryInput') || {}).value?.trim() || '';
      const addressVal = (document.getElementById('address') || {}).value?.trim() || '';
      const companyVal = (document.getElementById('companyName') || {}).value?.trim() || '';
      const cardVal = (document.getElementById('card') || {}).value?.trim() || '';
      const monthVal = (document.getElementById('monthInput') || {}).value?.trim() || '';
      const yearVal = (document.getElementById('yearInput') || {}).value?.trim() || '';
      const securityVal = (document.getElementById('security') || {}).value?.trim() || '';
      const companyChecked = !!(document.getElementById('address4') && document.getElementById('address4').checked);

      // clear previous errors
      ['nameError','emailError','countryError','addressError','companyError','cardError','securityError'].forEach(clearError);

      let valid = true;

      // Name
      const nameParts = nameVal.split(/\s+/).filter(Boolean);
      if (!nameVal) { showError('nameError','Name is required'); valid = false; }
      else if (nameParts.length < 2) { showError('nameError','Enter a valid full name'); valid = false; }

      // Email
      if (!emailVal) { showError('emailError','Email is required'); valid = false; }
      else if (!isValidEmail(emailVal)) { showError('emailError','Enter a valid email'); valid = false; }

      // Country
      if (!countryVal) { showError('countryError','Select country'); valid = false; }

      // Company/address checks when checked
      if (companyChecked) {
        if (!addressVal) { showError('addressError','Address is required for company orders'); valid = false; }
        if (!companyVal) { showError('companyError','Company name is required'); valid = false; }
      }

      // Card
      if (!cardVal) { showError('cardError','Card is required'); valid = false; }
      else if (!isValidCardNumber(cardVal)) { showError('cardError','Enter a valid card number (digits only)'); valid = false; }

      // Month/Year
      if (!monthVal || !yearVal) { showError('cardError','Select expiration month and year'); valid = false; }

      // Security
      if (!securityVal) { showError('securityError','Security code required'); valid = false; }

      if (!valid) return;

      // Show processing on button
      const btn = document.getElementById('placeorder');
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Processing order...`;
      }

      // simulate processing then redirect (change URL if you want)
      setTimeout(() => {
        window.location.href = 'thankyou.html';
      }, 2000);
    });
  }

});
