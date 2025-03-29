const numero = prompt("Digite um número:");
if (numero % 2 !== 0) {
    logToConsole(numero + " é ímpar.");
} else {
    logToConsole(numero + " é par.");
}