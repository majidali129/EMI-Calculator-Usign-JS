let calculate = document.getElementById("total")
calculate.addEventListener("click",()=>{
let loanAmount = document.getElementById("loanAmount").value;
let interestRate = document.getElementById("interestRate").value;
let loanTerm = document.getElementById("loanTerm").value;
let interest = (loanAmount * (interestRate / 100)) / loanTerm;
console.log(interest);
let emi = ((loanAmount / loanTerm) + interest).toFixed(2);
// console.log(emi)
emi = emi.toString();
console.log(emi);
let totalEmi = document.getElementById("totalEmi");
totalEmi.value = (emi);



})
 document.getElementById("clear").addEventListener("click",()=>{
    document.querySelectorAll("input").forEach(Element=>{
        Element.value = "";
    })
 })

