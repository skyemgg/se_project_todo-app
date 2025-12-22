import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (formValues) => {
    let date = null;

    if (formValues.date) {
      date = new Date(formValues.date);
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    }

    const id = uuidv4();

    const values = { name: formValues.name, date, id, completed: false };
    renderTodo(values);
    todoCounter.updateTotal(true);

    addTodoForm.reset();
    validator.resetValidation();
    addTodoPopup.close();
  },
});

addTodoPopup.setEventListeners();

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDeleted(completed) {
  if (completed) {
    todoCounter.updateCompleted(-1);
  }
  todoCounter.updateTotal(false);
}

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDeleted);
  const todoElement = todo.getView();
  return todoElement;
};

const renderTodo = (data) => {
  const todoElement = generateTodo(data);
  section.addItem(todoElement);
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todoElement = generateTodo(item);
    return todoElement;
  },
  containerSelector: ".todos__list",
});

section.renderItems();

const validator = new FormValidator(validationConfig, addTodoForm);
validator.enableValidation();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});
