const dropdown = document.querySelector('#type');
const quant = document.querySelector('#qnt');

const view = document.querySelector('.view')

const btn = document.querySelector('#add');
const submit = document.querySelector('#submit');

const aEdit = document.querySelector('#aEdit');
const aAmount = document.querySelector('.AA');
let all = 0;

const price = document.querySelector('#price');
const expense = document.querySelector('.exp');

const savings = document.querySelector('.saving');

let accumulatedExp = 0;

aEdit.addEventListener('click', () => {
    const ans = prompt("Enter Allowance Amount: ");
    aAmount.innerHTML = `$${ans}`;
    all = ans;
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
    console.log("Why tf am I still running?!?!")
    accumulatedExp += parsePrice;
    expense.innerHTML = `$${accumulatedExp}`;

    let result = (all - accumulatedExp);
    savings.innerHTML = `$${result}`

    // Removing invalid CSS propertied if(invalid)
    quant.classList.remove('invalid');
    price.classList.remove('invalid');  

    // Making the module disappear
    view.classList.remove('open');
    }
}

submit.addEventListener('click', () => {

    inputValidation();
    
})


dropdown.addEventListener('change', () => {

console.log("change to: ", dropdown.value); 

})



console.log(dropdown.value);