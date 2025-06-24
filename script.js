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

submit.addEventListener('click', () => {

    accumulatedExp += parseInt(price.value);
    expense.innerHTML = `$${accumulatedExp}`;

    let result = (all - accumulatedExp);
    savings.innerHTML = `$${result}`


    view.classList.remove('open');
})




dropdown.addEventListener('change', () => {

console.log("change to: ", dropdown.value); 

})



console.log(dropdown.value);