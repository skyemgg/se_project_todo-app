class FormValidator {
  constructor(settings, formEl) {
    this._settings = settings;
    this._formEl = formEl;
    this._inputErrorClass = settings._inputErrorClass;
    this._inactiveButtonClass = settings._inactiveButtonClass;
    this._errorElement = settings._errorElement;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings._submitButtonSelector;
  }

  _hideInputError(inputElement) {
    this._errorElement = this._formEl.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._settings.inputErrorClass);
    this._errorElement.textContent = "";
    this._errorElement.classList.remove(errorClass);
  }
}

//_showInputError(inputElement, this._errorMessage);
//this._errorElement = this._formEl.querySelector(`#${inputElement.id}-error`);
//inputElement.classList.add(this._config.inputErrorClass);
//this._errorElement.textContent = this._errorMessage;
//this._errorElement.classList.add(errorClass);

_checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(inputElement);
  }
};

_hasInvalidInput = (inputList) => {
  return this._inputList.some((inputElement) => {
    return inputElement.validity.valid;
  });
};

_toggleButtonState();
if (this._hasInvalidInput(inputList)) {
  this._buttonElement.classList.add(settings.inactiveButtonClass);
  this._buttonElement.disabled = true;
} else {
  this._buttonElement.classList.remove(settings.inactiveButtonClass);
  this._buttonElement.disabled = false;
}

_checkInputValidity(inputElement);
if (!inputElement.validity.valid) {
  this._showInputError(inputElement, inputElement.validationMessage);
} else {
  this._hideInputError(inputElement);
}

_setEventListeners();
this._inputList = Array.from(
  this._formEl.querySelectorAll(this._inputSelector)
);
this._buttonElement = this._formEl.querySelector(settings.submitButtonSelector);

_toggleButtonState(this._inputList, this._buttonElement);

this._inputList.forEach((inputElement) => {
  inputElement.addEventListener("input", () => {
    this._checkInputValidity(inputElement);
    this._toggleButtonState(this._inputList, this._buttonElement);
  });
});

_enableValidation();
this._formEl.addEventListener("submit", (evt) => {
  evt.preventDefault();
});
export default FormValidator;
