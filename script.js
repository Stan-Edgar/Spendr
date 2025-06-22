const dropdown = document.querySelector('#type');
const quant = document.querySelector('#qnt');

const add = document.querySelector('#add');
const submit = document.querySelector('#submit');

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