const input = document.querySelector("#input");
const text = document.querySelector("#text");
const button = document.querySelector("button");
const storageText = localStorage.getItem('textinput')

if (input){
    text.textContent = storageText;
}

input.addEventListener('input', letter => {
    console.log(letter.target.value)
    text.textContent = letter.target.value;
});

const saveToLocalStorage = () =>{
    localStorage.setItem('textinput', text.textContent)
}
button.addEventListener('click', saveToLocalStorage)
