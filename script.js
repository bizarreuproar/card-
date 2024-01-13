const cardholderName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNum");
const inputName = document.getElementById("name");

inputName.addEventListener("keydown", (e) =>{
    cardholderName.innerText = e.target.value;

})