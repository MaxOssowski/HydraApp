const counterSelector = document.querySelector('.counter--js');
const addButton = document.querySelector('.add-button--js');
const deleteButton = document.querySelector('.delete-button--js');
const key = new Date().toISOString().slice(0, 10);

let storageCounter = localStorage.getItem(key);
let counter = parseInt(storageCounter);

if(counter > -1){
    counterSelector.innerHTML = counter;
} else{
    counter = 0;
    localStorage.setItem(key, counter)
    counterSelector.innerHTML = counter;
}


addButton.addEventListener("click", (e) => {
    counter++;
    localStorage.setItem(key, counter);
    counterSelector.innerHTML = counter;
});

deleteButton.addEventListener("click", (e) => {
    if(counter > 0) {
        counter--;
        localStorage.setItem(key, counter);
        counterSelector.innerHTML = counter;
    }
});