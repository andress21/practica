let firtValue;
let secondValue;
let operation;

function initial(){

    const resultDisplay = document.getElementById("resultDisplay")
    const nine = document.getElementById("nine")
    const eight = document.getElementById("eight")
    const seven = document.getElementById("seven")
    const six = document.getElementById("six")
    const five = document.getElementById("five")
    const four = document.getElementById("four")
    const three= document.getElementById("three")
    const two = document.getElementById("two")
    const one = document.getElementById("one")
    const zero = document.getElementById ("zero")
    const division = document.getElementById("division")
    const multiply = document.getElementById ("multiply")
    const addition = document.getElementById("addition")
    const subtraction = document.getElementById("subtraction")
    const remove = document.getElementById ("delete")
    const squared =document.getElementById("squared")
    const result = document.getElementById ("result")

    one.onclick = function (e){
        resultDisplay.textContent = resultDisplay.textContent + "1";
    }
    two.onclick = function (e) {
        resultDisplay.textContent = resultDisplay.textContent + "2"
    }
    three.onclick = function (e){
        resultDisplay.textContent = resultDisplay.textContent + "3";
    }
    four.onclick = function (e){
        resultDisplay.textContent = resultDisplay.textContent + "4";
    }
    five.onclick = function (e){
        resultDisplay.textContent = resultDisplay.textContent + "5";
    }
    six.onclick = function (e){
        resultDisplay.textContent = resultDisplay.textContent + "6";
    }
    seven.onclick = function (e){
        resultDisplay.textContent = resultDisplay.textContent + "7";
    }
    eight.onclick = function (e){
        resultDisplay.textContent = resultDisplay.textContent + "8";
    }
    nine.onclick = function (e){
        resultDisplay.textContent = resultDisplay.textContent + "9";
    }
    zero.onclick = function (e){
        resultDisplay.textContent = resultDisplay.textContent + "0";
    }
    squared.onclick = function (e){
        firtValue = resultDisplay.textContent;
        operation = "^";
        clean();
    }
    remove.onclick = function (e){
        erase();
    }
    addition.onclick = function (e){
        firtValue = resultDisplay.textContent;
        operation = "+";
        clean();
    }
    subtraction.onclick = function (e){
        firtValue = resultDisplay.textContent;
        operation = "-";
        clean();
    }
    multiply.onclick = function (e){
        firtValue = resultDisplay.textContent;
        operation = "x";
        clean();
    }
    division.onclick = function (e){
        firtValue = resultDisplay.textContent;
        operation = "/";
        clean();
    }
    result.onclick = function (e){
        secondValue = resultDisplay.textContent;
        operate();
    }
}
    function clean(){
        resultDisplay.textContent = "";
    }
    function erase(){
        resultDisplay.textContent = "";
        firtValue=0;
        secondValue=0;
        operation="";
    }
    function operate(){
        let res=0;
        switch(operation){
            case "+":
                res = parseFloat(firtValue) + parseFloat(secondValue);
                break;
            case "-":
                res = parseFloat(firtValue) - parseFloat(secondValue);
                break;
            case "/":
                res = parseFloat(firtValue) / parseFloat(secondValue);
                break;
            case "x":
                res = parseFloat(firtValue) * parseFloat(secondValue);
                break;
            case "^":
                res = parseFloat(firtValue) * parseFloat(firtValue);
                break;
        } erase();
        resultDisplay.textContent = res;

    }