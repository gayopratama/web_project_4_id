export class FormValidator {
  constructor(formElement, selectors) {
    this.formElement = formElement;
    this.selectors =selectors;
    this.inputFields = Array.from(formElement.querySelectorAll("input"));
    this.errorFields = Array.from(formElement.querySelectorAll(".input-error"));
    this.submitButton = formElement.querySelector(".submit");

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.formElement.addEventListener("submit", this.handleSubmit);
    this.inputFields.forEach((inputField) => {
      inputField.addEventListener("input", this.handleInput);
    });

    this.enableValidation();

  
  }

  enableValidation() {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.clearForm();
    this.setSubmitButtonState(false);
  }

  handleInput(event) {
    const inputField = event.target;
    const errorField = this.getErrorField(inputField);
    const isValid = this.setErrorDisplay(inputField, errorField);

    this.setSubmitButtonState(this.isFormValid());

  }

  setErrorDisplay(inputField, errorField) {
    let message = []
    const isValid = inputField.validity.valid;
    console.log(inputField.validity.valid)
    if (!isValid) {
      errorField.style.display = "block";
      message.push("kolom harus lebih dari 2 karakter")
      errorField.innerHTML = message

    } if (inputField.value.length >=40) {
      errorField.style.display = "block";
      message.push("kolom tidak boleh lebih dari karakter")
    }
    if (isValid) {
      errorField.style.display = "none";

    }
    return isValid;
  }

  isFormValid() {
    return this.inputFields.every((inputField) => inputField.validity.valid);
  }

  setSubmitButtonState(isValid) {
    this.submitButton.disabled = !isValid;
    this.submitButton.classList.toggle(this.selectors.disabledButton);

  }

  clearForm() {
    this.inputFields.forEach((inputField) => (inputField.value = ""));
    this.errorFields.forEach((errorField) => (errorField.style.display = "none"));
  }

  getErrorField(inputField) {
    const parent = inputField.parentElement;
    return parent.querySelector(".input-error");
  }
}