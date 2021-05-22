const form = document.querySelector('form');
const input = document.querySelector('input');

// Email regex
const pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function clear() {
  form.classList.remove('error');
  form.classList.remove('success');
}

function isInputEmpty() {
  return input.value === '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = input.value;
  const message = document.querySelector('#message');

  if (isInputEmpty()) {
    message.textContent = 'Whoops! It looks like you forgot to add your email';
    form.classList.add('error');
  } else if (!pattern.test(email)) {
    message.textContent = 'Please provide a valid email address';
    form.classList.add('error');
  } else {
    message.textContent = 'Submit successful';
    form.classList.add('success');
  }

  //   CLear field
  input.value = '';
});

// When the user click some thing the field will clear
input.addEventListener('input', (e) => {
  clear();
});
