export class Popup {
    constructor() {
      this.popup = document.querySelector(".popup");
      this.closePopupBtn = document.querySelector(".popup__close-icon");
      this.popupImage = document.querySelector(".popup__image");
      this.popupTitle = document.querySelector(".popup__title");
  
      this.closePopupImage = this.closePopupImage.bind(this);
      this.closePopupBtn.addEventListener("click", this.closePopupImage);
      this.popupImage.addEventListener("click", this.openPopupImage)
    }
  
    openPopupImage() {
      this.popupImage.src = link;
      this.popupTitle.textContent = name;
      this.popup.style.display = "block";
      console.log("test")
    }
  
    closePopupImage() {
      this.popup.style.display = "none";
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
    profileForm.closeEditForm();
    cardForm.closeCardForm();
    popup.closePopupImage();
    this.toggleOverlay();
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

