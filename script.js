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



let all = parseInt(localStorage.getItem('Allowance')) || 0;
let accumulatedExp = parseInt(localStorage.getItem("Expense")) || 0;

let storedSavings = localStorage.getItem('Savings');
let savCalc = storedSavings !== null
  ? parseInt(storedSavings)
  : (all - accumulatedExp);



function savingsCalc() {
    savings.innerHTML = `$${(all - accumulatedExp)}`;
    localStorage.setItem("Savings", (all - accumulatedExp));
}

aEdit.addEventListener('click', () => {
    const ans = prompt("Enter Allowance Amount: ");
    aAmount.innerHTML = `$${ans}`;
    all = ans;
    localStorage.setItem('Allowance', ans);

    savingsCalc();

})

add.addEventListener('click', function() {
    view.classList.add("open");
})

function inputValidation() {
    let parsePrice = parseInt(price.value);


    if(isNaN(parsePrice)) {
        quant.classList.add('invalid');
        price.classList.add('invalid');
        return alert("Please enter a valid number!");
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

    createReciept();

}

submit.addEventListener('click', () => {

    inputValidation();
    localStorage.setItem("Expense", accumulatedExp);
    
})


dropdown.addEventListener('change', () => {

console.log("change to: ", dropdown.value); 

})



const receipts = JSON.parse(localStorage.getItem("habits")) || [];


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

// Create reciept variable
let rec = {
    Title: dropdown.value,
    Expense: price.value,
    Date: formattedDate
};

receipts.push(rec);
localStorage.setItem("Reciepts", JSON.stringify(receipts));


}


function RenderItems() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        console.log(`${key}: ${value}`);
        if(key === "Expense") {
            expense.innerText = `$${value}`;
        } else if (key === "Allowance") {
            aAmount.innerText = `$${value}`;
        } else if (key === "Savings") {
            savings.innerText = `$${value}`;
        }
        
    }
};

RenderItems();