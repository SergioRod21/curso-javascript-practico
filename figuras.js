//Codigo del cuadrado

console.group('Cuadrado')
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadro es: ${perimetroCuadrado}cm`)

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es: ${areaCuadrado}cm^2`)
console.groupEnd();

//Codigo del triangulo
console.group('Triangulo')


const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`)

const alturaTriangulo = 5.5;
console.log(`La altura del triangulo es: ${alturaTriangulo}cm`)


function perimetroTriangulo(lado1, lado2, base) {
    return result = lado1 + lado2 + base,
        console.log(`El perimetro del triangulo es: ${result}cm`)
}
perimetroTriangulo(2, 5, 4)




const areaTriangulo = (lado1, base) => result = (lado1 * base) / 2;
areaTriangulo(2, 50)
console.log(`El area del triangulo es: ${result}cm^2`)



console.groupEnd();

// Circulos
console.group('Circulos')



const radioCirculo = 4;
console.log(`El radio del circulo es ${radioCirculo}cm`);

function diametroCirculo(radio) {
    return result = radio * 2,
        console.log(`El diametro del circulo es ${result}cm`)
};
diametroCirculo(4);


const PI = Math.PI;
console.log(`PI es: ${PI}`)




const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del circulo es: ${perimetroCirculo}cm`)


const perimetroCirculo = (diametro) => result = diametro * Math.PI;
perimetroCirculo(3);
console.log(`El perimetro del circulo es: ${result}cm`)



const areaCirculo = (radioCirculo * radioCirculo) * PI;

function areaCirculo(radio) {
    return result = radio * radio * Math.PI,
        console.log(`El area del circulo es: ${result}cm^2`)
}

areaCirculo(10);

