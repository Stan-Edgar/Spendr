const dropdown = document.querySelector('#type');
const quant = document.querySelector('#qnt');

const view = document.querySelector('.view')

const btn = document.querySelector('#add');
const submit = document.querySelector('#submit');

const aEdit = document.querySelector('#aEdit');
const aAmount = document.querySelector('.AA');

aEdit.addEventListener('click', () => {
    const ans = prompt("Enter Allowance Amount: ");
    aAmount.innerHTML = `$${ans}`;
})

add.addEventListener('click', function() {
    view.classList.add("open");
})

submit.addEventListener('click', () => {
    view.classList.remove('open');
})

function checkAllowance(value) {
if(value === "allowance") {
    quant.placeholder = "";
    quant.style.backgroundColor = "#8e8e8e";
    quant.setAttribute("disabled", "");
} else {
    quant.placeholder = "1";
    quant.style.backgroundColor = "white";
    quant.removeAttribute("disabled");
}
}

checkAllowance(dropdown.value);


dropdown.addEventListener('change', () => {

checkAllowance(dropdown.value);

console.log("change to: ", dropdown.value); 

})



console.log(dropdown.value);