const formAddTodo = document.querySelector('.form-add-todo');
const formSearchTodo = document.querySelector('.form-search input');
const todosContainer = document.querySelector('.todos-container');

const createTodo = inputValue => {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo-item="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete" data-todo-trash="${inputValue}"></i>
    </li>`;
}

const addTodo = e => {
    e.preventDefault();

    const inputValue = e.target.add.value.trim();

    if (inputValue.length) {
        createTodo(inputValue);
        e.target.reset();
    }
};

const deleteTodo = ({ target: { classList, dataset } }) => {
    const clickedOnTrash = classList.contains('delete');
    clickedOnTrash ? document
        .querySelector(`[data-todo-item="${dataset.todoTrash}"]`).remove()
        : null;
};

const hideTodos = ({ classList }) => {
    classList.remove('d-flex');
    classList.add('hidden');
}

const showTodos = ({ classList }) => {
    classList.remove('hidden');
    classList.add('d-flex');
}

const hideOrShowTodos = (searchQuery, todos) => {
    todos
        .filter(todo => 
            !todo.textContent.trim().toLowerCase().includes(searchQuery))
            .forEach(hideTodos)
    
    todos
        .filter(todo => 
            todo.textContent.trim().toLowerCase().includes(searchQuery))
            .forEach(showTodos)
}

const searchTodos = e => {
    const searchQuery = e.target.value.trim().toLowerCase();
    const todos = Array.from(document.querySelectorAll('[data-todo-item]'));
    hideOrShowTodos(searchQuery, todos);
};

formAddTodo.addEventListener('submit', addTodo);
todosContainer.addEventListener('click', deleteTodo);
formSearchTodo.addEventListener('input', searchTodos);
 