var answer = "";
var prevValue = "";
var operator = "";

function EnterNumber(value) {
    answer += value;
    document.getElementById("Answer").value = answer;
}

function EnterOperator(value) {
    prevValue = parseFloat(answer);
    answer = "";
    operator = value;
    document.getElementById("Answer").value = operator;
}
function EnterClear() {
    answer = "";
    document.getElementById("Answer").value = "";
}
function EnterEqual() {
    var num2 = parseFloat(answer);
    switch (operator) {
        case "+":
            document.getElementById("Answer").value = (prevValue + num2).toString();
            break;
        case "-":
            document.getElementById("Answer").value = (prevValue - num2).toString();
            break;
        case "*":
            document.getElementById("Answer").value = (prevValue * num2).toString();
            break;
        case "/":
            if (num2 !== 0) {
                document.getElementById("Answer").value = (prevValue / num2).toString();
            } else {
                alert("Error! Division by zero is not allowed.");
            }
            break;
    }
    prevValue = "";
    answer = "";
}

