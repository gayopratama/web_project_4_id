//Get DOM Element
const openEditFormBtn = document.querySelector(".profile__edit-btn");
const closeEditFormBtn = document.querySelector(".profile__edit-close-btn")
const SubmitEditFormBtn = document.querySelector(".profile__edit-submit-btn")
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
editForm.addEventListener("keyup", function(e) {;
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


form.addEventListener("mouseleave", closeCardForm)
editForm.addEventListener("mouseleave", closeEditForm)



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
  const name = nameInput.value;
  const job = jobInput.value;
  const displayName = document.querySelector('.profile__info-name');
  const displayJob = document.querySelector('.profile__info-job');
  displayName.textContent = name;
  displayJob.textContent = job;
  closeEditForm();
}

function popUpImage(index) {
  const link = initialCards[index].link
  const title = initialCards[index].name
  
  document.querySelector(".popup__image").src= link
  document.querySelector(".popup__title").textContent= title
  popup.style.display= "block"

}

function closePopupImage () {
  popup.style.display= "none"
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
      <button class="element__like-btn">
      <img src="./image/like-button.png" alt="">
      </button>
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
  const nameAndLink = { name: nameInput.value, 
  link : linkInput.value
}

  initialCards.push(nameAndLink)

  initiateCard();
  reQueryElement();
  closeCardForm();
}

function reQueryElement() {
  let likeBtns = document.querySelectorAll(".element__like-btn")

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









