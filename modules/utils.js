export class PopUp {
  constructor(photo, caption, element) {
      this._photo = photo;
      this._caption = caption;
      this._element = element;
      this.setEventLisiteners()
  }

  setEventLisiteners() {
      this._element.addEventListener("click", this.popupOpen);
      document.querySelector(".popup__close-icon").addEventListener("click", this.popupClose);
      }
      
  

  popupOpen() {
    const urlPhoto = this.querySelector(".element__photo").src;
    const urlCaption = this.querySelector(".element__caption").textContent;

      document.querySelector(".popup__image").src= urlPhoto;
      document.querySelector(".popup__title").textContent= urlCaption;
      document.querySelector(".popup").style.display= "block";
  }

  popupClose() {
      document.querySelector(".popup").style.display= "none"
  }
}

export class Overlay {
  constructor() {
    this.overlay = document.querySelector(".overlay");
    this.page = document.querySelector(".page");

    this.overlay.addEventListener("click", this.closeAllPopup.bind(this));
    this.page.addEventListener("keyup", this.handlePageKeyUp.bind(this));
  }

  closeAllPopup() {
    document.querySelector(".form").classList.remove("form-active");
    document.querySelector(".form").classList.remove("form-active");
    document.querySelector(".overlay").classList.remove("overlay-active");
  }

  toggleOverlay() {
    this.overlay.classList.toggle("overlay-active");
  }

  handlePageKeyUp(evt) {
    if (evt.key === 'Escape') {
      this.closeAllPopup();
    }
  }
}

