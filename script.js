const openEditFormBtn = document.querySelector(".profile__edit-btn");
const closeEditFormBtn = document.querySelector(".profile__edit-close-btn")
const SubmitEditFormBtn = document.querySelector(".profile__edit-submit-btn")
let likeBtns = document.querySelectorAll(".element__like-btn")
const addCardBtn = document.querySelector(".rectangle")
const cardCloseBtn = document.querySelector(".add__form-close-btn")
const submitCardBtn = document.querySelector(".add__form-submit-btn")

openEditFormBtn.addEventListener("click", openEditForm);
closeEditFormBtn.addEventListener("click", closeEditForm);
SubmitEditFormBtn.addEventListener("click", submitEditForm);
addCardBtn.addEventListener("click", addCardForm);
cardCloseBtn.addEventListener("click", closeCardForm);
submitCardBtn.addEventListener("click", addNewCard);


function addCardForm() {
  document.querySelector(".add__form").style.display = "block" ;
}

function closeCardForm() {
  document.querySelector(".add__form").style.display = "none";
}


function openEditForm() {
  document.querySelector(".profile__edit-form").style.display = "block";
}

function closeEditForm() {
  document.querySelector(".profile__edit-form").style.display = "none";
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

 
document.querySelector('input[name="job"]').addEventListener("keyup", function(e) {
  if (e.key == 'Enter' || e.keyCode === 13) {
    submitEditForm();
  }
});


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
  document.querySelector(".popup__title").src= name

  document.querySelector(".popup").style.display= "block"
}




