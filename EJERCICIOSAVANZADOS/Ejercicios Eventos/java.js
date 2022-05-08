/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */

let btnToClick = document.querySelector('.btnToClick');

const clickButton = () => {
    console.log('Has pulsado el botón')
} 

btnToClick.addEventListener('click', clickButton)



/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

let focusInput = document.querySelector('.focus');

const focusEvent = () => {
    let focusValue = focusInput.value ;
    console.log(focusValue)
}

focusInput.addEventListener('focus', focusEvent)



/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

let inputValue = document.querySelector('.value');

const inputEvent = () => {
    let inputText = inputValue.value ;
    console.log(inputText)
}

inputValue.addEventListener('input', inputEvent) 

