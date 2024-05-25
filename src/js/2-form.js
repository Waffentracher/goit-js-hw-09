document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const saveToLocalStorage = () => {
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();
    const formData = { email: emailValue, message: messageValue };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  };

  const checkStorageAndPopulateForm = () => {
    const savedFormData = localStorage.getItem('feedback-form-state');
    if (savedFormData) {
      const { email, message } = JSON.parse(savedFormData);
      emailInput.value = email || '';
      messageInput.value = message || '';
    }
  };

  checkStorageAndPopulateForm();

  form.addEventListener('input', saveToLocalStorage);

  form.addEventListener('submit', event => {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (emailValue !== '' && messageValue !== '') {
      console.log({ email: emailValue, message: messageValue });
      localStorage.removeItem('feedback-form-state');
      form.reset();
    } else {
      alert('Please fill in both fields.');
    }
  });
});
