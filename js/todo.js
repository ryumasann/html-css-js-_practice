document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // タスク追加時の処理
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    addTask(taskText);
    todoInput.value = "";
  });

  // タスク追加関数
  function addTask(taskText) {
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        span.classList.add("completed");
      } else {
        span.classList.remove("completed");
      }
    });

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
  }
});
