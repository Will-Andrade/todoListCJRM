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

const deleteTodo = ({ target }) => {
    const clickedOnTrash = target.classList.contains('delete');
    if (clickedOnTrash) {
        document
            .querySelector(`[data-todo-item="${target.dataset.todoTrash}"]`)
            .remove();
    }
};

const hideTodo = ({ classList }) => {
    classList.remove('d-flex');
    classList.add('hidden');
}

const showTodo = ({ classList }) => {
    classList.remove('hidden');
    classList.add('d-flex');
}

const hideOrShowTodo = todos => {
    todos.forEach((todo, index) => todo.shouldBeVisible 
        ? showTodo(todo[`todo${index}`]) : hideTodo(todo[`todo${index}`]));
}

const searchTodo = ({ target }) => {
    const searchQuery = target.value.trim().toLowerCase();
    const todos = Array.from(document.querySelectorAll('[data-todo-item]'))
        .map((todo, index) => 
            ({ 
                [`todo${index}`]: todo, shouldBeVisible: todo.textContent
                .trim()
                .toLowerCase()
                .includes(searchQuery) 
            })
        );
    hideOrShowTodo(todos);
};

formAddTodo.addEventListener('submit', addTodo);
todosContainer.addEventListener('click', deleteTodo);
formSearchTodo.addEventListener('input', searchTodo);
 