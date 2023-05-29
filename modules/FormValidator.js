export class FormValidator {
  constructor(formElement) {
    this.formElement = formElement;
    this.inputFields = Array.from(formElement.querySelectorAll("input"));
    this.errorFields = Array.from(formElement.querySelectorAll(".input-error"));
    this.submitButton = formElement.querySelector("#form__submit-btn");

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
    const isValid = inputField.value.trim() !== "";
    if (!isValid) {
      errorField.style.display = "block";
    } else {
      errorField.style.display = "none";
    }
    return isValid;
  }

  isFormValid() {
    return this.inputFields.every((inputField) => inputField.value.trim() !== "");
  }

  setSubmitButtonState(isValid) {
    this.submitButton.disabled = !isValid;
    this.submitButton.classList.toggle("disabled", !isValid);
  }

  clearForm() {
    this.inputFields.forEach((inputField) => (inputField.value = ""));
    this.errorFields.forEach((errorField) => (errorField.style.display = "none"));
  }

  getErrorField(inputField) {
    const fieldName = inputField.dataset.error;
    return this.errorFields.find((errorField) => errorField.dataset.error === fieldName);
  }
}