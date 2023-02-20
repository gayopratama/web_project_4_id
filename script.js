const openBtn = document.querySelector(".profile__edit-btn");
const closeBtn = document.querySelector(".form__close_btn")
const saveBtn = document.querySelector(".form__submit_btn")
let likeBtns = document.querySelectorAll(".element__like-btn")
const addBtn = document.querySelector(".profile__rectangle")
const cardCloseBtn = document.querySelector(".add__form_close-btn")
const submitCardBtn = document.querySelector(".add__form_submit-btn")

openBtn.addEventListener("click", openForm);
closeBtn.addEventListener("click", closeForm);
saveBtn.addEventListener("click", saveForm);
addBtn.addEventListener("click", addCard);
cardCloseBtn.addEventListener("click", cardCloseForm);
submitCardBtn.addEventListener("click", pushCard);


function addCard() {
  document.querySelector(".add__form").style.display = "block";
}

function cardCloseForm() {
  document.querySelector(".add__form").style.display = "none";
}


function openForm() {
  document.querySelector(".edit__form").style.display = "block";
}

function closeForm() {
  document.querySelector(".edit__form").style.display = "none";
}


function saveForm() {
  let name = document.querySelector('input[name="name"]').value;
  let job = document.querySelector('input[name="job"]').value;
  let displayName = document.querySelector('.profile__info_name');
  let displayJob = document.querySelector('.profile__info_job');
  displayName.innerHTML = name;
  displayJob.innerHTML = job;
  closeForm();
}


document.querySelector(".form").addEventListener("submit", saveForm);
 


document.querySelector('input[name="job"]').addEventListener("keyup", function(e) {
  if (e.key == 'Enter' || e.keyCode === 13) {
    saveForm();
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
      <img class="element__foto" src="${link}">
      <div class="element__caption_container">
      <p class="element__caption">${name}</p>
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


function pushCard() {

  const nameAndLink = { name: document.querySelector('input[name="title"]').value, 
  link : document.querySelector('input[name="link"]').value
}


  initialCards.push(nameAndLink)

  console.log(initialCards)

  initiateCard();
  reQueryElement();
  cardCloseForm();
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
console.log(index)

initialCards.splice(index, 1)

initiateCard();
console.log(initialCards)
}



