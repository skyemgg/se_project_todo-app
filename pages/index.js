import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");
const counterText = document.querySelector(".counter__text");
const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm(popupSelector: "#add-todo-popup", handleFormSubmit (inputValues) => {
   const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  let date = null;

  if (dateInput) {
    date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  }

  const id = uuidv4();

  const values = { name, date, id, completed: false };
  renderTodo(values);

  addTodoForm.reset();
  validator.resetValidation();
  addTodoPopup.close();

} )

addTodoPopup.setEventListener()

function handleCheck(completed){
  todoCounter.updateCompleted(completed);
};

function handleDeleted(completed){
  if (completed)
  todoCounter.updateCompleted(false);
}

const section = new Section(items: (),
 renderer: ( const section = generateTodo(render);
  Section.append(todoElement);),
  containerSelector: (".todos__list"));


const section = renderItems




const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck,handleDeleted);
  const todoElement = todo.getView();

  const checkbox = todoElement.querySelector(".todo__completed");
  checkbox.addEventListener("change", updateCounter);

  const deleteBtn = todoElement.querySelector(".todo__delete-btn");
  deleteBtn.addEventListener("click", updateCounter);

  return todoElement;
};

const renderTodo = (data) => {
  const todoElement = generateTodo(data);
  todosList.append(todoElement);
};

const updateCounter = () => {
  const todos = todosList.querySelectorAll(".todo");
  const totalTodos = todos.length;
  const completedTodos = todosList.querySelectorAll(
    ".todo__completed:checked"
  ).length;

  counterText.textContent = `Showing ${completedTodos} out of ${totalTodos} completed`;
};

const validator = new FormValidator(validationConfig, addTodoForm);
validator.enableValidation();

initialTodos.forEach((item) => {
  renderTodo(item);
});

updateCounter();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});




  updateCounter();
});
