const cardholderName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNum");
const inputName = document.getElementById("name");
const inputNum = document.getElementById("num");
const inputMM = document.getElementById("mm");
const cardDate = document.getElementById("cardDate");
const inputYY = document.getElementById("yy");
const cardCVC = document.getElementById("cardCVC");
const inputCVV = document.getElementById("cvv");

inputName.addEventListener("input", (e) =>{
    if(inputName.value.length < 28){
     cardholderName.innerText = e.target.value;
    }
    if(e.target.value == ""){
        cardholderName.innerText = "Jane Appleseed";
    }
});

inputName.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") 
        return;
    if (inputName.value.length >= 24)
        e.preventDefault();
});

inputNum.addEventListener("input", (e)=>{
    let enteredNumber = e.target.value;
    let formattedNumber = enteredNumber.replace(/[^\d]/g, ''); 
    formattedNumber = formattedNumber.slice(0, 16);
    formattedNumber = formattedNumber.padEnd(16, '0');
    cardNumber.innerText = formattedNumber.match(/.{4}/g).join(' ');
});

inputNum.addEventListener("keydown", (e)=>{
    if (e.key === "Backspace") 
        return;
    if (inputNum.value.length >= 19)
        e.preventDefault();
});

inputMM.addEventListener("input", (e)=>{
    let enteredNumber = e.target.value;
    let numericValue = enteredNumber.replace(/\D/g, '');
    let formattedNumber = numericValue.slice(0, 2);
    
    formattedNumber = formattedNumber.padEnd(2, '0');
    cardDate.innerText = formattedNumber + "/" + inputYY.value.padEnd(2, '0');
});

inputMM.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") 
        return;
    if (inputMM.value.length >= 2)
        e.preventDefault();
});

inputYY.addEventListener("input", (e)=>{
    let enteredNumber = e.target.value;
    let numericValue = enteredNumber.replace(/\D/g, '');
    let formattedNumber = numericValue.slice(0, 2);
    formattedNumber = formattedNumber.padEnd(2, '0');
    cardDate.innerText = inputMM.value.padEnd(2, '0') + "/" + formattedNumber;
});

inputYY.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") 
        return;
    if (inputYY.value.length >= 2)
        e.preventDefault();
});

inputCVV.addEventListener("input", (e)=>{
    let enteredNumber = e.target.value;
    let numericValue = enteredNumber.replace(/\D/g, '');
    let formattedNumber = numericValue.slice(0, 3);
    formattedNumber = formattedNumber.padEnd(3, '0');
    cardCVC.innerText = formattedNumber;
})

inputCVV.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") 
        return;
    if (inputCVV.value.length >= 3)
        e.preventDefault();
});
