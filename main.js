const displayElem = document.getElementById("inputDisplay");
const numbersElem = document.querySelectorAll(".numbers button");
const equalBtnElem = document.getElementById("equalBtn");
const clearElem = document.getElementById("clearBtn");
const opElem = document.getElementsByClassName("operator");
let resultDisplayed = false;

const filteredNumberElem = Array.from(numbersElem).filter(element=>element.id !== "clearBtn");

for (let i = 0; i < filteredNumberElem.length; i++) {
    filteredNumberElem[i].addEventListener("click", (event) => {
        if(resultDisplayed){
            resultDisplayed = false;
            displayElem.innerText = event.target.innerText;
        }
        else{
            displayElem.innerText += event.target.innerText;
        }
  });
}



for(let i = 0; i<opElem.length; i++){
    opElem[i].addEventListener("click", (event)=>{
        if(resultDisplayed){
           resultDisplayed = false; 
        }
        displayElem.innerText+=event.target.innerText;
    })
}
equalBtnElem.addEventListener("click",()=>{
    resultDisplayed = true;
    displayElem.innerText = eval(displayElem.innerText);
})
clearElem.addEventListener("click", ()=>{
    displayElem.innerText = "";
})
