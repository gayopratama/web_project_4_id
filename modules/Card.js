export class Card {
  constructor(caption, photo) {
    this._caption = caption;
    this._photo = photo;
  }

    _getTemplate() {
  const cardElement = document
    .querySelector('#element')
    .content
    .querySelector('.element')
    .cloneNode(true);

  return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".element__photo").src = this._photo;
    this._element.querySelector(".element__caption").textContent = this._caption;
    this._setEventLisiteners()

    return this._element;
  }

  _setEventLisiteners() {
    this._element.querySelector(".element__delete").addEventListener("click", this._deleteCard)
    this._element.querySelector(".element__like").addEventListener("click", this._likeCard)
  }


  _deleteCard(e) {
    e.target.closest(".element").remove()
  }

  _likeCard(e) {
    e.target.classList.toggle("element__like_active")

  }
}


export class CardItems {
  constructor(cardlist) {
    this._cardlist = cardlist
    this._renderCard()
  }

  addCard(evt){
    this._cardlist.push({
      name : titleInput.value,
      link : linkInput.value
    })
    
    this._renderCard()
  }

  _renderCard() {

    var cards = []
  
    this._cardlist.forEach((item) => {
      
      const card = new Card(item.name, item.link,);
      const cardElement = card.generateCard()
      cards.push(cardElement)
    
    })
    
    document.querySelector(".elements").innerHTML = '';
    document.querySelector(".elements").replaceChildren(...cards);
  }

}

