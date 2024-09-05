/*---------------step 1 -----------------*/
let container1 = document.querySelector(".container-step1")
let inputName = document.querySelector(".input-name")
let inputEmail = document.querySelector(".input-email")
let inputNumber = document.querySelector(".input-number")
let btnNext1 = document.getElementById("btn-step-1")

btnNext1.addEventListener("click", () => {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let booleanState = true
    // if (inputName.value.length <= 7 ){
    //     inputName.placeholder = 'valor con 7 o mas caracteres';
    //     inputName.classList.add('error');
    //     booleanState = false
    // }else{
    // booleanState = true
    // }

    // if(!regex.test(inputEmail)){
    //     inputEmail.placeholder = "ingrese un Email "
    //     inputEmail.classList.add('error');
    //     booleanState = false
    // }else{
    //     booleanState = true
    //     }
    // if(inputNumber.value.length <= 9 ){

    //     inputNumber.placeholder = "Ingrese un numero mayor a 8 caracteres "
    //     inputNumber.classList.add('error');
    //     booleanState =  false
    // }else{
    //     booleanState = true
    //     }

    if (booleanState) {
        container1.classList.add("hidden")
        container2.classList.remove("hidden")
    }

})

/*---------------step 2 -----------------*/

let container2 = document.querySelector(".container-step-2")
let container3 = document.querySelector(".container-step-3")
let btnNext2 = document.getElementById("btn-steps-2")
let montlyYearly = document.getElementById("switch")
let pricePerMonth = document.querySelectorAll(".price-per-month")
let pricePerYear = document.querySelectorAll(".price-per-year")
let btnPlans = document.querySelectorAll(".btn-plans")
let btnBack2 = document.getElementById("btn-back-2")


btnPlans.forEach(boton => {
    boton.addEventListener('click', () => {
        // Quitar la clase 'active' de todos los botones
        btnPlans.forEach(btn => btn.classList.remove('btn-active'));

        // Agregar la clase 'active' al botón actual
        boton.classList.add('btn-active');



        let JsonOptionSelected = JSON.stringify(boton.textContent)
        window.localStorage.setItem("Agregado", JsonOptionSelected)

        let miAgreadoJSON = localStorage.getItem("Agregado")
        let miAgregado = JSON.parse(miAgreadoJSON)
        console.log(miAgregado)
    });
});






montlyYearly.addEventListener("click", () => {

    if (montlyYearly.checked) {
        pricePerYear.forEach(year => {

            year.classList.remove("hidden-price")
            pricePerMonth.forEach(month => {
                month.classList.add("hidden-price")
            })
        })
    } else {
        pricePerYear.forEach(year => {

            year.classList.add("hidden-price")
            pricePerMonth.forEach(month => {
                month.classList.remove("hidden-price")
            })
        })
    }

})


btnBack2.addEventListener("click", ()=>{
    container2.classList.add("hidden")
    container1.classList.remove("hidden")
})