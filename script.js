//Get DOM Element
const openEditFormBtn = document.querySelector(".profile__edit-btn");
const closeEditFormBtn = document.querySelector(".profile__edit-close-btn")
const SubmitEditFormBtn = document.querySelector(".profile__edit-submit-btn")
let likeBtns = document.querySelectorAll(".element__like-btn")
const addCardBtn = document.querySelector(".rectangle")
const cardCloseBtn = document.querySelector(".form__close-btn")
const submitCardBtn = document.querySelector(".form__submit-btn")
const closePopupBtn = document.querySelector(".popup__close-icon")
const addForm = document.querySelector(".form")
const editForm = document.querySelector(".profile__edit-form")
const nameInput = document.querySelector('input[name="name"]');
const jobInput = document.querySelector('input[name="job"]');
const nameError = document.querySelector('.name-input-error');
const jobError = document.querySelector('.job-input-error');
const submitBtn = document.querySelector('#form__submit-btn');
const popupOverlay = document.querySelector(".popup__overlay");
const form = document.querySelector(".form");
const titleInput = document.querySelector("[name='title']");
const linkInput = document.querySelector("[name='link']");
const popup = document.querySelector(".popup")

//addEventListener
popupOverlay.addEventListener("click", closePopupImage)
openEditFormBtn.addEventListener("click", openEditForm);
closeEditFormBtn.addEventListener("click", closeEditForm);
addCardBtn.addEventListener("click", addCardForm);
cardCloseBtn.addEventListener("click", closeCardForm);
closePopupBtn.addEventListener("click", closePopupImage);
SubmitEditFormBtn.addEventListener("click", submitEditForm);
submitCardBtn.addEventListener("click", function (evt) {
  addNewCard();
  evt.preventDefault()
});
editForm.addEventListener("keyup", function(e) {
  if (e.key == 'Enter' || e.keyCode === 13) {
    submitEditForm();
  }
  if (e.key == 'Escape' || e.keyCode === 27) {
    closeEditForm()
  }
});

form.addEventListener("keyup", function(e) {
  if (e.key == 'Enter' || e.keyCode === 13) {
    addCardForm();
  }
  if (e.key == 'Escape' || e.keyCode === 27) {
    closeCardForm()
  }
});
popup.addEventListener("keyup", function(e) {
  if (e.key == 'Escape' || e.keyCode === 27) {
    closePopupImage()
  }
});



function addCardForm() {
  addForm.style.display = "block" ;
}

function closeCardForm() {
  addForm.style.display = "none";
}


function openEditForm() {
  editForm.style.display = "block";
}

function closeEditForm() {
  editForm.style.display = "none";
}


function submitEditForm() {
  let name = document.querySelector('input[name="name"]').value;
  let job = document.querySelector('input[name="job"]').value;
  let displayName = document.querySelector('.profile__info-name');
  let displayJob = document.querySelector('.profile__info-job');
  displayName.innerHTML = name;
  displayJob.innerHTML = job;
  closeEditForm();
}



let initialCards = [
  {
    name: "Lembah Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Danau Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Pegunungan Gundul",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Gunung Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Taman Nasional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
]; 


function cardItems(link, name, index) {
  return `
  <div class="element">
      <img class="element__foto" src="${link}" onclick="popUpImage(${index})">
      <div class="element__container">
      <p class="element__container-caption">${name}</p>
      <button class="element__like-btn"></button>
      <button class="element__delete-btn" onclick="deleteCard(${index})"></button>
      </div>
      </div>
  `;
}

function initiateCard() {
  let template = "";
  initialCards.forEach ((item, index) => {
    template += cardItems(item.link, item.name, index)
  })
  document.querySelector(".elements").innerHTML = template;
}

initiateCard();
reQueryElement();


function addNewCard() {

  const nameAndLink = { name: document.querySelector('input[name="title"]').value, 
  link : document.querySelector('input[name="link"]').value
}


  initialCards.push(nameAndLink)

  initiateCard();
  reQueryElement();
  closeCardForm();
}

function reQueryElement() {
  likeBtns = document.querySelectorAll(".element__like-btn")

  likeBtns.forEach(posesButtons)

function posesButtons(item) {
item.addEventListener("click",function(e) {
  item.classList.toggle("element__like-btn_active")
} )
}
}

function deleteCard(index) {

initialCards.splice(index, 1)

initiateCard();
}

function popUpImage(index) {
  let link = initialCards[index].link
  let name = initialCards[index].name
  
  document.querySelector(".popup__image").src= link
  document.querySelector(".popup__title").textContent= name

  document.querySelector(".popup").style.display= "block"

}

function closePopupImage () {
  document.querySelector(".popup").style.display= "none"
}


 //project 6
// Define functions to enable/disable submit button and update error messages
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







