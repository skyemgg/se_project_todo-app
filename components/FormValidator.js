class FormValidator {
  constructor(settings, FormEl) {
    this._settings = settings;
    this._FormEl = FormEl;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
  }

  _toggleButtonState() {
    if (hasInvalidInput(inputList)) {
      this._buttonElement.classList.add(settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(inputElement, inputElement.validationMessage);
    } else {
      hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._FormEl.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._FormEl.querySelector(
      settings.submitButtonSelector
    );

    toggleButtonState(inputList, buttonElement);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
