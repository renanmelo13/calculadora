/* =========================================
   PEGAR OS NÚMEROS
========================================= */

function pegarNumeros() {

    let numero1 = Number(
        document.getElementById("Numero1").value
    );

    let numero2 = Number(
        document.getElementById("Numero2").value
    );

    return [numero1, numero2];
}


/* =========================================
   SOMAR
========================================= */

function somar() {

    let [numero1, numero2] = pegarNumeros();

    let resultado = numero1 + numero2;

    document.getElementById("resultado").textContent = resultado;
}


/* =========================================
   SUBTRAIR
========================================= */

function subtrair() {

    let [numero1, numero2] = pegarNumeros();

    let resultado = numero1 - numero2;

    document.getElementById("resultado").textContent = resultado;
}


/* =========================================
   MULTIPLICAR
========================================= */

function multiplicar() {

    let [numero1, numero2] = pegarNumeros();

    let resultado = numero1 * numero2;

    document.getElementById("resultado").textContent = resultado;
}


/* =========================================
   DIVIDIR
========================================= */

function dividir() {

    let [numero1, numero2] = pegarNumeros();


    if (numero2 === 0) {

        document.getElementById("resultado").textContent =
            "Não é possível dividir por zero.";

        return;
    }


    let resultado = numero1 / numero2;

    document.getElementById("resultado").textContent = resultado;
}