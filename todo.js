const todos = [];

const addTodo = target => {
    const name = target.value;
    // <li>
    const todoItem = document.createElement("li");
    // <input>
    const todoCheck = document.createElement("input");
    // text
    const todoText = document.createTextNode(name);

    // <input type="checkbox">
    todoCheck.setAttribute("type", "checkbox");

    // <li><input type="checkbox"></li>
    todoItem.appendChild(todoCheck);
    // <li><input type="checkbox">text</li>
    todoItem.appendChild(todoText);
    todoList.appendChild(todoItem);

    todoCheck.addEventListener("change", (e) => {
        todoItem.classList.toggle("done");
    });

    // clear the text box
    target.value = "";
    // refocus the text box
    target.focus();
};

newTodo.addEventListener("change", e => addTodo(e.target));