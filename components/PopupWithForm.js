import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".popup__form");
  }

  _getInputValues() {
    const inputs = [...this._popupForm.querySelectorAll(".popup__input")];
    const values = {};
    inputs.forEach((i) => (values[i.name] = i.value));
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const values = this._getInputValues();
      this._handleFormSubmit(values);
    });
  }
}
export default PopupWithForm;
