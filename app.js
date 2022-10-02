const input = document.getElementById("binary");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");

const convert = () =>{
    binary = input.value;
    result.innerText = "Decimal Number : " + parseInt(binary, 2);
}

button.addEventListener("click", convert);