let inputName = document.querySelector(".input-name")
let inputEmail = document.querySelector("input-email")
let inputNumber = document.querySelector("input-number")

let btnNext = document.getElementById("btn-steps")

console.log(btnNext)
btnNext.addEventListener("click", ()=>{
    console.log(inputName.value.length)
    if (inputName.value.length <= 7 ){
        inputName.placeholder = 'valor con 7 o mas caracteres';
        inputName.classList.add('error');
    }

})
