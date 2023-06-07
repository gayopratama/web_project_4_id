export class PopUp {
  constructor(photo, caption, element) {
      this._photo = photo;
      this._caption = caption;
      this._element = element;
      this.setEventLisiteners();
  }

  setEventLisiteners() {
    this._element.querySelector(".element__photo").addEventListener("click",this.popupOpen.bind(this._element));      
    document.querySelector(".popup__close-icon").addEventListener("click", this.popupClose);
    document.querySelector(".popup__overlay").addEventListener("click", this.popupClose);
    }
      

  popupOpen() {
    const urlPhoto = this.parentElement.querySelector(".element__photo").src;
    const urlCaption = this.parentElement.querySelector(".element__caption").textContent;
    
    document.querySelector(".popup__image").src= urlPhoto;
    document.querySelector(".popup__title").textContent= urlCaption;
    document.querySelector(".popup").style.display= "block";
  }

  popupClose() {
    document.querySelector(".popup").style.display= "none"
  }
}