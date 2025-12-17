import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(( popupSelector, handleFormSubmit )) {
    super(( popupSelector ));
    this._popupForm = this._popupElement.querySelector(".popup__close");
    this._handleFormSubmit = handleFormSubmit
  }

_getInputValues(){
  this._inputValues = this._popupForm.querySelectorAll(".popup__input");

  const values = ();
  this._inputValues.forEach(input => {
    input.name(value)
    input.dete(value)
    
  });
  return values
}

setEventListener(){
  super.setEventListener();
  this._popupForm.addEventListener("submit", (evt)) => {
    evt.preventDefault();
    const _inputValues = this._getInputValues();
  this._handleFormSubmit(evt);
  }

}
export default PopupWithForm;
