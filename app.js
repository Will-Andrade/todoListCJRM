// TODO: Refactoring. Entender cada parte do código e criar funções únicas
// TODO: Implementar nova remoção de todo usando data- e dataset
const formAddTodo = document.querySelector('.form-add-todo');
const formSearchTodo = document.querySelector('.form-search input');
const todosContainer = document.querySelector('.todos-container');

const createTodo = inputValue => todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
`;

const resetForm = form => form.reset();

const validateInputValue = e => {
    e.preventDefault();

    const inputValue = e.target.add.value.trim();

    if (inputValue.length) {
        createTodo(inputValue);
        resetForm(e.target);
    }
};

const deleteTodoHandler = e => {
    //! Verifica se o usuário clicou no ícone de lixeira
    const clickedOnTrash = Array.from(e.target.classList).includes('delete');
    
    //! Se clicou, o todo pai da lixeira é excluído
    clickedOnTrash ? e.target.parentElement.remove() : null;
};

const searchTodoHandler = e => {
    //! transforma o valor do input
    const inputValue = e.target.value.trim().toLowerCase();

    //! Cria um array dos todos do container
    Array.from(todosContainer.children)
    //! Filtra todos não compatíveis comparando com o input value
        .filter(todo => !todo.textContent.trim().toLowerCase().includes(inputValue))
    //! Cada todo que não conter o valor dentro do input é excluído
        .forEach(todo => {
            todo.classList.remove('d-flex');
            todo.classList.add('hidden');
        })
    
    //! Cria um array dos todos do container
    Array.from(todosContainer.children)
    //! Filtra todos compatíveis comparando com o input value
        .filter(todo => todo.textContent.trim().toLowerCase().includes(inputValue))
    //! Cada todo que conter o valor dentro do input será colocado na tela
        .forEach(todo => {
            todo.classList.remove('hidden');
            todo.classList.add('d-flex');
        })
};

formAddTodo.addEventListener('submit', validateInputValue);
todosContainer.addEventListener('click', deleteTodoHandler);
formSearchTodo.addEventListener('input', searchTodoHandler);
 