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
    console.log("Open View")
    view.classList.add("open");
})

function inputValidation() {
    let parsePrice = parseInt(price.value);

    console.log('Inside InputValidation')

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

    // Create the reciept
     createReciept(dropdown.value, price.value, formattedDate);

    }

   

}

submit.addEventListener('click', () => {

    console.log("SUBMIT")
    inputValidation();
    localStorage.setItem("Expense", accumulatedExp);
    localStorage.setItem("Receipts", JSON.stringify(receipts));
    
})


dropdown.addEventListener('change', () => {

console.log("change to: ", dropdown.value); 

})


// Reciepts array to retrieve in render
let receipts = JSON.parse(localStorage.getItem("Receipts")) || [];

// Create formatted Date
let reDate = new Date();
let formattedDate = reDate.toLocaleDateString('en-GB');


function createReciept(name, price, DATE) {


// Create elements
let reciept = document.createElement('div');
let icon = document.createElement('img');
let title = document.createElement("h1");
let datePara = document.createElement('p');
let pricePara = document.createElement('p');



// Add classNames
reciept.className = 'reciept';

// Change values
datePara.textContent = `${DATE}`;
pricePara.innerText = `Cost: $${price}`;
title.innerText = `${name}`;

// Append all the elements together
reciept.appendChild(icon);
reciept.appendChild(title);
reciept.appendChild(datePara);
reciept.appendChild(pricePara);

rWrapper.appendChild(reciept);

// ⛔ Prevent duplicates (optional but smart)
if (receipts.some(r => r.name === name)) {
console.log("receipt already exists!");
return;
}

// Create reciept variable
let rec = {
    Title: name,
    Expense: price,
    Date: DATE
};

receipts.push(rec);


}

function resetDate(a) {

    if (a !== formattedDate) {
        console.log("This receipt is expired");
        console.log("Deleting Now....")
        return true
    }

}


function RenderItems() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        if(key === "Expense") {
            expense.innerText = `$${value}`;
        } else if (key === "Allowance") {
            aAmount.innerText = `$${value}`;
        } else if (key === "Savings") {
            savings.innerText = `$${value}`;
        } 
    
    }

    receipts = receipts.filter(rec => rec.Date === formattedDate);
    localStorage.setItem("Receipts", JSON.stringify(receipts));

    receipts.forEach(rec => {
    rWrapper.innerHTML = "";
    console.log('----------------------------------->')
    if(resetDate(rec.Date)) {
        return alert("Is this where everything goes to hell?")
    } else {
        createReciept(rec.Title, rec.Expense, rec.Date)
    }
    
    Object.keys(rec).forEach(key => {
        console.log(`${key}: ${rec[key]}`)
    });

});
};

RenderItems();