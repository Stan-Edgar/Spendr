const dropdown = document.querySelector('#type');
const quant = document.querySelector('#qnt');

const view = document.querySelector('.view');
const main = document.querySelector('.main');
const rWrapper = document.querySelector('.rWrapper');

const btn = document.querySelector('#add');
const submit = document.querySelector('#submit');

const aEdit = document.querySelector('#aEdit');
const aAmount = document.querySelector('.AA');


const price = document.querySelector('#price');
const expense = document.querySelector('.exp');
const savings = document.querySelector('.saving');


let all = 0;
let accumulatedExp = 0;
let result = (all - accumulatedExp);

localStorage.setItem('Allowance',JSON.stringify(all));
localStorage.setItem("Expense", JSON.stringify(accumulatedExp));
localStorage.setItem("Savings", JSON.stringify(all - accumulatedExp));

function savingsCalc() {
    savings.innerHTML = `$${result}`;
}

aEdit.addEventListener('click', () => {
    const ans = prompt("Enter Allowance Amount: ");
    aAmount.innerHTML = `$${ans}`;
    all = ans;

    savingsCalc();

})

add.addEventListener('click', function() {
    view.classList.add("open");
})

function inputValidation() {
    let parsePrice = parseInt(price.value);
    console.log(parsePrice);

    if(isNaN(parsePrice)) {
        quant.classList.add('invalid');
        price.classList.add('invalid');
        return  alert("Please enter a valid number!");
    } else {
    console.log("Successful Validation")
    accumulatedExp += parsePrice;
    expense.innerHTML = `$${accumulatedExp}`;

    savingsCalc();

    // Removing invalid CSS propertied if(invalid)
    quant.classList.remove('invalid');
    price.classList.remove('invalid');  

    // Making the module disappear
    view.classList.remove('open');
    }
}

submit.addEventListener('click', () => {

    inputValidation();
    createReciept();
    
})


dropdown.addEventListener('change', () => {

console.log("change to: ", dropdown.value); 

})


function createReciept() {

// Create elements
let reciept = document.createElement('div');
let icon = document.createElement('img');
let title = document.createElement("h1");
let datePara = document.createElement('p');
let pricePara = document.createElement('p');

// Create formatted Date
let reDate = new Date();
let formattedDate = reDate.toLocaleDateString('en-GB');

// Add classNames
reciept.className = 'reciept';

// Change values
datePara.textContent = `${formattedDate}`;
pricePara.innerText = `Cost: $${price.value}`;
title.innerText = `${dropdown.value}`;

// Append all the elements together
reciept.appendChild(icon);
reciept.appendChild(title);
reciept.appendChild(datePara);
reciept.appendChild(pricePara);

rWrapper.appendChild(reciept);


}

