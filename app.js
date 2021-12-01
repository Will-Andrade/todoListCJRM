//! Primeiro, adicionar todos
const formAddTodo = document.querySelector('.form-add-todo');
const formSearchTodo = document.querySelector('.form-search input');
const todosContainer = document.querySelector('.todos-container');

formAddTodo.addEventListener('submit', e => {
    e.preventDefault();

    const inputValue = e.target.add.value.trim();

    if (inputValue.length) {
        todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
        `;

        e.target.reset();
    }
});

//! Segundo, remover todos
todosContainer.addEventListener('click', e => {
    const clickedOnTrash = Array.from(e.target.classList).includes('delete');
    clickedOnTrash ? e.target.parentElement.remove() : null;
})

//! Terceiro, buscar/filtrar todos
formSearchTodo.addEventListener('input', e => {
    const inputValue = e.target.value.trim().toLowerCase();

    Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.trim().toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex');
            todo.classList.add('hidden');
        })
    
    Array.from(todosContainer.children)
        .filter(todo => todo.textContent.trim().toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('hidden');
            todo.classList.add('d-flex');
        })
})
