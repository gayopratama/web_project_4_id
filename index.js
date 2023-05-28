import { Card, CardItems } from "./modules/Card.js";
import { FormValidator } from "./modules/FormValidator.js";
import {Overlay} from "../modules/utils.js"


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

class ProfileForm {
  constructor() {
    this.openEditFormBtn = document.querySelector(".profile__edit-btn");
    this.closeEditFormBtn = document.querySelector(".profile__edit-close-btn");
    this.submitEditFormBtn = document.querySelector(".profile__edit-submit-btn");
    this.editForm = document.querySelector(".profile__edit-form");
    this.nameInput = document.querySelector('input[name="name"]');
    this.jobInput = document.querySelector('input[name="job"]');
    this.displayName = document.querySelector('.profile__info-name');
    this.displayJob = document.querySelector('.profile__info-job');

    this.openEditFormBtn.addEventListener("click", this.openEditForm.bind(this));
    this.closeEditFormBtn.addEventListener("click", this.closeEditForm.bind(this));
    this.submitEditFormBtn.addEventListener("click", this.submitEditForm.bind(this));
    this.editForm.addEventListener("keyup", this.handleFormKeyUp.bind(this));
  }

  openEditForm() {
    this.editForm.classList.add("form-active");
    document.querySelector(".overlay").classList.add("overlay-active");
  }

  closeEditForm() {
    this.editForm.classList.remove("form-active");
    document.querySelector(".overlay").classList.remove("overlay-active");
  }

  submitEditForm() {
    const name = this.nameInput.value;
    const job = this.jobInput.value;
    this.displayName.textContent = name;
    this.displayJob.textContent = job;
    this.closeEditForm();
  }

  handleFormKeyUp(e) {
    if (e.key === 'Enter') {
      this.submitEditForm();
    }
  }
}

document.querySelector(".rectangle").addEventListener("click", function(){
  document.querySelector(".form").classList.add("form-active");
  document.querySelector(".overlay").classList.add("overlay-active");
})

function closeCardForm(){
  document.querySelector(".form").classList.remove("form-active");  
  document.querySelector(".overlay").classList.remove("overlay-active");
}

function closePopup() {
  document.querySelector(".overlay").classList.toggle("overlay-active");
}

document.querySelector(".form__submit-btn").addEventListener("click", function(e) {
    const name = document.querySelector("input[name='title']").value;
    const link = document.querySelector("input[name='link']").value;

    initialCards.push({ name, link });
    const cardSum = new CardItems(initialCards);
    cardSum._renderCard()
    e.preventDefault()
    closeCardForm()
  })



const cardItems = new CardItems(initialCards);
const profileForm = new ProfileForm();
const overlay = new Overlay();

const editForm = document.querySelector(".profile__edit-form");
const addForm = document.querySelector(".form");
const editFormValidator = new FormValidator(editForm);
const cardFormValidator = new FormValidator(addForm);