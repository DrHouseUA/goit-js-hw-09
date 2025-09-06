const refsEl = {
  formEl: document.querySelector('.feedback-form'),
};

let formData = {
  email: '',
  message: '',
};
console.log();
window.addEventListener('DOMContentLoaded', handleRealodPage);
function handleRealodPage(event) {
  event.preventDefault(); // деякі браузери вимагають це
  if (
    localStorage.getItem('feedback-form-state') !== null &&
    typeof JSON.parse(localStorage.getItem('feedback-form-state')) ===
      typeof formData
  ) {
    try {
      console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
      formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
      return;
    }
    refsEl.formEl.elements.email.value = formData.email;
    refsEl.formEl.elements.message.value = formData.message;
  } else {
    if (localStorage.getItem('feedback-form-state') !== null) {
      console.error(
        '❌ Виникла помилка: дані не валідні у локальному сховищі! Сховище буде очищено!'
      );
      localStorage.removeItem('feedback-form-state');
    }
  }
}

refsEl.formEl.addEventListener('input', handleInputMessage);

function handleInputMessage(event) {
  formData.email = refsEl.formEl.elements.email.value.trim();
  formData.message = refsEl.formEl.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

refsEl.formEl.addEventListener('submit', handleOnSubmitForm);

function handleOnSubmitForm(event) {
  event.preventDefault();
  const formElement = event.target;

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formElement.reset();
    formData = {
      email: '',
      message: '',
    };
  }
}
