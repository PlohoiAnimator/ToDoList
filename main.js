const addButton = document.querySelector(".addButton");
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class Item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.classList.add('item_input');
        input.value = itemName;
        input.type = "text";
        input.disabled = true;

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.innerHTML = "REMOVE";

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));
        removeButton.addEventListener('click', () => this.remove(itemBox));
    }

    edit(input){
        input.disabled = !input.disabled;
    }

    remove(itemBox){
        container.removeChild(itemBox);
    }
}

function check(){
    if(input.value != ""){
        new Item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 1){
        check();
    }
})