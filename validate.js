const nameError = document.querySelector('.name-input-error');
const jobError = document.querySelector('.job-input-error');



function setSubmitButtonState(isValid) {
    SubmitEditFormBtn.disabled = !isValid;
    SubmitEditFormBtn.classList.toggle("profile__edit-submit-btn-disabled", !isValid);
  }
  
  function setErrorDisplay(inputField, errorField) {
    if (inputField.value.trim() === "") {
      errorField.style.display = "block";
      return false;
    } else {
      errorField.style.display = "none";
      return true;
    }
  }
  
  // Add event listeners to update submit button state and error messages
  editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    nameInput.value = "";
    jobInput.value = "";
    console.log(event)
    setSubmitButtonState(false);
  });
  
  editForm.addEventListener("input", (event) => {
    const isNameValid = setErrorDisplay(nameInput, nameError);
    const isJobValid = setErrorDisplay(jobInput, jobError);
    setSubmitButtonState(isNameValid && isJobValid);
  });
  
  // Validate input fields and enable/disable submit button in the card form
  const titleError = form.querySelector(".title-input-error");
  const linkError = form.querySelector(".link-input-error");
  
  form.addEventListener("input", (event) => {
    const isTitleValid = setErrorDisplay(titleInput, titleError);
    const isLinkValid = setErrorDisplay(linkInput, linkError);
    submitCardBtn.disabled = !(isTitleValid && isLinkValid);
    submitCardBtn.classList.toggle("form__submit-btn-disabled", !(isTitleValid && isLinkValid));
  });


  function enableValidation () {
    const formList = Array.from(document.querySelectorAll(".form"));
    
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt)=> {
        evt.preventDefault();
      });
    });
  }
  

  enableValidation();
  