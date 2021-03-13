const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

if(window.localStorage.getItem("urls") == undefined){
     var urls = [];
     window.localStorage.setItem("urls", JSON.stringify(urls));
}

var urlsEX = window.localStorage.getItem("urls");
var urls = JSON.parse(urlsEX);


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input, name));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = urls.indexOf(name);
            urls[indexof] = input.value;
            window.localStorage.setItem("urls", JSON.stringify(urls));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = urls.indexOf(name);
        urls.splice(index, 1);
        window.localStorage.setItem("urls", JSON.stringify(urls));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        urls.push(inputValue.value);
        window.localStorage.setItem("urls", JSON.stringify(urls));
		inputValue.value = "";
	}
}


for (var v = 0 ; v < urls.length ; v++){
    new item(urls[v]);
}


