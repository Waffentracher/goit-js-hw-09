document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');

  const checkStorageAndPopulateForm = () => {
    const savedFormData = localStorage.getItem('feedback-form-state');
    if (savedFormData) {
      const { email, message } = JSON.parse(savedFormData);
      form.email.value = email;
      form.message.value = message;
    }
  };

  checkStorageAndPopulateForm();

  form.addEventListener('submit', event => {
    event.preventDefault();

    const emailValue = form.email.value.trim();
    const messageValue = form.message.value.trim();

    if (emailValue !== '' && messageValue !== '') {
      localStorage.setItem(
        'feedback-form-state',
        JSON.stringify({ email: emailValue, message: messageValue })
      );

      console.log({ email: emailValue, message: messageValue });

      form.email.value = '';
      form.message.value = '';
    } else {
      alert('Please fill in both fields.');
    }
  });
});
