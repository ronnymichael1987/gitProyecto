let change = 0;
let buyFactor = 3.781;
let sellFactor = 3.789;

// function multiplyBy() {
//     // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
//     num1 = document.getElementById("dollar").value;
//     num2 = document.getElementById("sol").value;
//     compra = document.getElementById("compra").value;
//     venta = document.getElementById("venta").value;

//     if (change == 0) {
//         document.getElementById("sol").value = num1 / 3.789;
//     }
//     else {
//         document.getElementById("dollar").value = num2 * 3.781;
//     }
// }

// function flagDollar(){
//     change=0;
//     document.getElementById("sol").value = num1 / 3.789;
// }
// function flagSol(){
//     change=1;
//     document.getElementById("dollar").value = num2 * 3.781;
// }

function buyDollar1() {
    num1 = document.getElementById("dollar").value;
    num2 = document.getElementById("sol").value;
    compra = document.getElementById("compra").value;
    venta = document.getElementById("venta").value;
    if (change == 0) {
        document.getElementById("sol").value = num1 * buyFactor;
    }
    else{
        document.getElementById("sol").value = num1 / sellFactor;
    }

    //document.getElementById("sol").value = num1 * buyFactor;
}
function buyDollar2() {
    num1 = document.getElementById("dollar").value;
    num2 = document.getElementById("sol").value;
    compra = document.getElementById("compra").value;
    venta = document.getElementById("venta").value;
    if (change == 0) {
        document.getElementById("dollar").value = num2 / buyFactor;
    }
    else{
        document.getElementById("dollar").value = num2 * sellFactor;
    }
    //document.getElementById("dollar").value = num2 / buyFactor;
}

function switchBuy() {
    document.getElementById('dollarTxt').value = "Dolares";
    document.getElementById('solesTxt').value = "Soles";
    num1 = document.getElementById("dollar").value;
    num2 = document.getElementById("sol").value;
    change = 0;
    document.getElementById("sol").value = num1 * buyFactor;

}
function switchSell() {
    document.getElementById('dollarTxt').value = "Soles";
    document.getElementById('solesTxt').value = "Dolares";
    num1 = document.getElementById("dollar").value;
    num2 = document.getElementById("sol").value;
    change = 1;
    document.getElementById("sol").value = num1 / sellFactor;

}