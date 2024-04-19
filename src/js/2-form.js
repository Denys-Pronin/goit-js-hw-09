const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const { email, message } = JSON.parse(savedData);
  emailInput.value = email;
  messageInput.value = message;
}
form.addEventListener('input', function (event) {
  if (event.target === emailInput || event.target === messageInput) {
    const data = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!emailInput.value || !messageInput.value) {
    alert('Please fill in all fields.');
    return;
  }
  const data = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  console.log(data);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
