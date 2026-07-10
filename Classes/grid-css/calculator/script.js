
document.querySelector("[data-clear]").addEventListener("click", () => {

    calculator.clear();

});
document.querySelector("[data-delete]").addEventListener("click", () => {

    calculator.delete();

});
document.querySelector("[data-dot]").addEventListener("click", () => {

    calculator.pressDot();

});
document.querySelector("[data-equal]").addEventListener("click", () => {

    calculator.pressEqual();

});
document.querySelectorAll("[data-operator]").forEach(button => {

    button.addEventListener("click", () => {

        calculator.pressOperator(button.dataset.operator);

    });

});

class Calculator{

    constructor(){
        ...
    }

    updateDisplay(){
        ...
    }

    pressNumber(num){
        ...
    }

    pressOperator(op){
        ...
    }

    delete(){
        ...
    }

    clear(){
        ...
    }

} 

const calculator = new Calculator();

document.querySelectorAll("[data-number]").forEach(button => {

    button.addEventListener("click", () => {

        calculator.pressNumber(button.dataset.number);

    });

});