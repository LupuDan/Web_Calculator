function Calculate() {
    let action = prompt("Enter action (multiply, divide, addition, subtraction):");
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    switch(action){
        case "multiply":
            alert(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case "divide":
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
            } else {
                alert(`${num1} / ${num2} = ${num1 / num2}`);
            }
            break;
        case "addition":
            alert(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case "subtraction":
            alert(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        default:
            alert("Unknown action. Please enter one of: multiply, divide, addition, subtraction.");
            break;
    }
}
