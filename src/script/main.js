const counterSelector = document.querySelector('.counter--js');
const addButton = document.querySelector('.add-button--js');
const deleteButton = document.querySelector('.delete-button--js');

addButton.addEventListener("click", (e) => {
    counterSelector.innerHTML++;
});

deleteButton.addEventListener("click", (e) => {
    let counter = counterSelector.innerHTML;
    if(counter > 0) {
        counterSelector.innerHTML--;
    }
});