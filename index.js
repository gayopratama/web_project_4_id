import { Card, CardItems } from "./modules/Card.js";
import { FormValidator } from "./modules/FormValidator.js";
import { Popup, Overlay } from "./modules/utils.js";

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
    this.editForm.classList.toggle("form-active");
    overlay.toggleOverlay();
  }

  closeEditForm() {
    this.editForm.classList.toggle("form-active");
    overlay.toggleOverlay();
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

class CardForm {
  constructor() {
    this.addCardBtn = document.querySelector(".rectangle");
    this.cardCloseBtn = document.querySelector(".form__close-btn");
    this.submitCardBtn = document.querySelector(".form__submit-btn");
    this.addForm = document.querySelector(".form");

    this.addCardBtn.addEventListener("click", this.openCardForm.bind(this));
    this.cardCloseBtn.addEventListener("click", this.closeCardForm.bind(this));
    this.submitCardBtn.addEventListener("click", this.addCard.bind(this));
    this.addForm.addEventListener("keyup", this.handleFormKeyUp.bind(this));
  }

  openCardForm() {
    this.addForm.classList.toggle("form-active");
    overlay.toggleOverlay();
  }

  closeCardForm() {
    this.addForm.classList.toggle("form-active");
    overlay.toggleOverlay();
  }

  addCard(e) {
    const titleInput = document.querySelector("[name='title']");
    const linkInput = document.querySelector("[name='link']");
    const title = titleInput.value;
    const link = linkInput.value;

    if (title && link) {
      const newCard = new Card(title, link);
      cardItems.addCard(newCard);
      this.closeCardForm();
    }
    e.preventDefault()

  }

  handleFormKeyUp(e) {
    if (e.key === 'Enter') {
      this.addCard();
    }
  }
}


const cardItems = new CardItems(initialCards);
const popup = new Popup();
const profileForm = new ProfileForm();
const cardForm = new CardForm();
const overlay = new Overlay();

const editForm = document.querySelector(".profile__edit-form");
const addForm = document.querySelector(".form");
const editFormValidator = new FormValidator(editForm);
const cardFormValidator = new FormValidator(addForm);
















