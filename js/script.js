// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num>30 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 30.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `The number of routes in a ${num} x ${num} grid is ${latticePaths(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the number of paths through a given gridSize starting at
    top left corner going to bottom right corner and being able to move right and down only.
    latticePaths(4) returns 70
    latticePaths(9) returns 48620
    latticePaths(20) returns 137846528820
*/
function latticePaths(gridSize) {
    gridSize = gridSize * 2;
    let k = gridSize/2;
    return (factorial(gridSize))/(factorial(k)*(factorial(gridSize-k)));
}

/*
    Function to calculate the factorial of a number n
    factorial(0) returns 1
    factorial(3) returns 6
*/
function factorial(n) {
    if (n==0) return 1;
    let product = 1;
    for (let i=1;i<=n;i++) {
        product *= i;
    }
    return product;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}