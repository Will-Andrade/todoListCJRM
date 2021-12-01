//! Primeiro, adicionar todos
const formAddTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const todos = document.querySelectorAll('li');

formAddTodo.addEventListener('submit', e => {
    e.preventDefault();

    const inputValue = e.target.add.value;

    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    e.target.reset();
});

//! Segundo remover todos
todosContainer.addEventListener('click', e => {
    const clickedOnTrash = Array.from(e.target.classList).includes('delete');
    clickedOnTrash ? e.target.parentElement.remove() : null;
})
