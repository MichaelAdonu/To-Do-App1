const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  todoList.forEach((todoObject, index) => {
    
    //Using Object destructring
    const { name, dueDate } = todoObject;
    //Separate into three Elements
    const html = `
   
    <div class = "todo-name"> ${name} </div>
    <div class= "todo-date">${dueDate} </div> 
     <button " class="delete-todo-btn js-delete-todo-btn">Delete </button>
   `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  document
    .querySelectorAll(".js-delete-todo-btn")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector(".js-add-todo-btn").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  todoList.push({
    //name: name,
    //dueDate: dueDate,
    //Shorthand property syntax
    name,
    dueDate,
  });

  inputElement.value = "";
  dateInputElement.value = "";

  renderTodoList();
}
