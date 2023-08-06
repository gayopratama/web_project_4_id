export class Section {
    constructor( item, renderer, container){
       this._item = item; 
       this._renderer = renderer;
       this._container = document.querySelector(container)
    }

    addItem(element) {
        this._container.append(element)
    }

}