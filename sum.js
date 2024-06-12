function calculator() {
    console.log("Basic Calculator");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");

    let choice = parseInt(prompt("Enter your choice (1/2/3/4): "));

    let num1 = parseFloat(prompt("Enter first number: "));
    let num2 = parseFloat(prompt("Enter second number: "));

    switch (choice) {
        case 1:
            let sum = num1 + num2;
            console.log(`The sum is ${sum}`);
            break;
        case 2:
            let difference = num1 - num2;
            console.log(`The difference is ${difference}`);
            break;
        case 3:
            let product = num1 * num2;
            console.log(`The product is ${product}`);
            break;
        case 4:
            if (num2!= 0) {
                let quotient = num1 / num2;
                console.log(`The quotient is ${quotient}`);
            } else {
                console.log("Error! Division by zero is not allowed.");
            }
            break;
        default:
            console.log("Invalid choice. Please enter a number between 1 and 4.");
    }
}

calculator();