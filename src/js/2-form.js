const refsEl = {
  formEl: document.querySelector('.feedback-form'),
};

let formData = {
  email: '',
  message: '',
};

window.addEventListener('DOMContentLoaded', handleRealodPage);
function handleRealodPage(event) {
  event.preventDefault(); // деякі браузери вимагають це
  if (localStorage.length !== 0) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    refsEl.formEl.elements.email.value = formData.email;
    refsEl.formEl.elements.message.value = formData.message;
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
    localStorage.clear();
    formElement.reset();
  }
}
