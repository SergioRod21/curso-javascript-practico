//Codigo del cuadrado

console.group('Cuadrado')
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)




console.log(`El area del cuadrado es: ${areaCuadrado}cm^2`)
console.groupEnd();

// //Codigo del triangulo
// console.group('Triangulo')


// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`)

// const alturaTriangulo = 5.5;
// console.log(`La altura del triangulo es: ${alturaTriangulo}cm`)






// console.groupEnd();

// // Circulos
// console.group('Circulos')





// areaCirculo(10);

// const perimetroCuadrado = () => ladoCuadrado * 4;



// Cuadrado

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}


function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;


    const perimetro = areaCuadrado(value);
    alert(perimetro);
}

//Triangulo

function perimetroTriangulo(lado, lado2, base) {
    return lado + lado2 + base;
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("inputLadoTriangulo");
    const input2 = document.getElementById("inputLado2Triangulo");
    const input3 = document.getElementById("inputBaseTriangulo");
    const lado = parseFloat(input.value);
    const lado2 = parseFloat(input2.value);
    const base = parseFloat(input3.value);

    const perimetro = perimetroTriangulo(lado, lado2, base);
    alert(perimetro);
}






function areaTriangulo(lado1, base) {
    return (lado1 * base) / 2;
}

function calcularAreaTriangulo() {
    const input = document.getElementById("inputLadoTriangulo");
    const input3 = document.getElementById("inputBaseTriangulo");
    const lado = parseFloat(input.value);
    const base = parseFloat(input3.value);

    const area = areaTriangulo(lado, base);
    alert(area);
}

//Circulo


const PI = Math.PI;

function perimetroCirculo(radio) {
    return (radio * 2) * Math.PI
}
function diametroCirculo(radio) {
    return result = radio * 2
};

function areaCirculo(radio) {
    return radio * radio * Math.PI
}


function calcularDiametroCirculo() {
    const input = document.getElementById("inputRadioCirculo")
    const radio = input.value

    const diametro = parseInt(diametroCirculo(radio))
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputRadioCirculo")
    const radio = parseInt(input.value);

    const perimetro = parseInt(perimetroCirculo(radio))
    alert(perimetro);
}

function calcularAreaCirculo() {
    input = document.getElementById("inputRadioCirculo")
    const radio = input.value

    const area = parseInt(areaCirculo(radio))
    alert(area);
}












