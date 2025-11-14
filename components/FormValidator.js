class FormValidator {
  constructor(settings, formEl) {
    this._settings = settings;
    this._formEl = formEl;
    this._errorClass = settings._errorClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._inactiveButtonClass = settings._inactiveButtonClass;
    constructor(config, formEl);
    this._formSelector = config.formSelector;
    this._formEl = formEl;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config._submitButtonSelector;
    this._config = config;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formEl.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._config.errorClass);
  }
}

this._showInputError(inputElement, errorMessage);
const errorElement = this._formEl.querySelector(`#${inputElement.id}-error`);
inputElement.classList.add(this._config.inputErrorClass);
errorElement.textContent = errorMessage;
errorElement.classList.add(this._config.errorClass);

this._checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    this_showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    this._hideInputError(inputElement);
  }
};

this._hasInvalidInput = (inputList) => {
  return (
    this >
    _inputList.some((inputElement) => {
      return inputElement.validity.valid;
    })
  );
};

this._toggleButtonState();
if (this._hasInvalidInput(inputList)) {
  this._buttonElement.classList.add(settings.inactiveButtonClass);
  this._buttonElement.disabled = true;
} else {
  this._buttonElement.classList.remove(settings.inactiveButtonClass);
  this._buttonElement.disabled = false;
}

this._checkInputValidity(inputElement);
if (!inputElement.validity.valid) {
  this.__showInputError(inputElement, inputElement.validationMessage);
} else {
  this._hideInputError(inputElement);
}

this._setEventListeners();
this._inputList = Array.from(
  this._formEl.querySelectorAll(this._inputSelector)
);
this._buttonElement = this._formEl.querySelector(settings.submitButtonSelector);

this._toggleButtonState(this._inputList, this._buttonElement);

this._inputList.forEach((inputElement) => {
  inputElement.addEventListener("input", () => {
    this._checkInputValidity(inputElement);
    this._toggleButtonState(this._inputList, this._buttonElement);
  });
});

this._enableValidation();
this._formEl.addEventListener("submit", (evt) => {
  evt.preventDefault();
});
this._setEventListeners();

export default FormValidator;
