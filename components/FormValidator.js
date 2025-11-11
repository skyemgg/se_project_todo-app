class FormValidator {
  constructor(settings, formEl) {
    this._settings = settings;
    this._formEl = formEl;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
  }

  _showInputError = (inputElement) => {
  //const errorElementId = `#${inputElement.id}-error`;
 // const errorElement = formElement.querySelector(errorElementId);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

_hideInputError = ( inputElement) => {
  //const errorElementId = `#${inputElement.id}-error`;
  //const errorElement = formElement.querySelector(errorElementId);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
};


_checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    _showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings,
    );
  } else {
    _hideInputError(inputElement);
  }
};

_hasInvalidInput = (this._inputList) {
  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

  _toggleButtonState() {
    if (_hasInvalidInput(inputList)) {
      this._buttonElement.classList.add(settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      _showInputError(inputElement, inputElement.validationMessage);
    } else {
      _hideInputError(inputElement);
    }
  };

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formEl.querySelector(
      settings.submitButtonSelector
  );

    _toggleButtonState(this._inputList, this._buttonElement);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  }

  _enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
