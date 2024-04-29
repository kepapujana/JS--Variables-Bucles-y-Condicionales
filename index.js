//varibles
let variableSinValor
let booleano1 = true
let booleano2 = true
const PI = 3.14
const TAU = 2*PI


//booleanos
let booleanoAnd = true
booleanoAnd === booleano1 && booleano2

let booleanoNot = false
booleanoNot === booleano1

let booleanoMix0 = true
booleanoMix0 === (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))


//operadores
let incrementarDesp = 2
resultadoDesp = incrementarDesp++

let incrementarAntes = 2
resultadoAntes = ++incrementarAntes

for (let contarHasta10_2 = 0; contarHasta10_2 <= 10; contarHasta10_2++) {
    // console.log(contarHasta10_2);
}



//bucles
//10
let contarHasta10_2 = 0
for (let i = 0; contarHasta10_2!==10 ; i++) {
    contarHasta10_2++
    // console.log (contarHasta10_2)
}

//11
let postI = 0;
let postJ = 0;
for (let i = 0; i < 11; i++) {
    postI = postI + postJ++
    // console.log(postI);
}

//12
let sumaPares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares+=i;
    }
}


// Variables
let variableValorNumerico = 1
const MiNombre = 'kepa'
const MiNumeroFav = 10
// let booleano1 = true
// let booleano2 = true
// const PI = 3.14
// const TAU = 2*PI


// Booleanos
let booleanoOr = true
booleanoOr === booleano1 || booleano2

let booleanoMix1 = true
booleanoMix1 === (booleano1 && (TAU/2 == PI)) || (variableValorNumerico >= MiNumeroFav)

let seisNoEsNueve = true
seisNoEsNueve === 6!=9

let booleanoMix2 = true
booleanoMix2 === variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU)


// Operadores
let valorSuma = undefined
valorSuma = MiNumeroFav + variableValorNumerico

let valorResta = undefined
valorResta = MiNumeroFav - variableValorNumerico

let valorMultiplicación = MiNumeroFav * variableValorNumerico
// console.log(valorMultiplicación)
// console.log(MiNumeroFav)
// console.log(variableValorNumerico)


let valorDivisión = MiNumeroFav / 3


//Bucles
//24
let contarHasta10 = 0
while (contarHasta10 !== 10) { 
    contarHasta10++
    }

//25
let preI = 0
let preJ = 0
for (let i = 0; i < 11; i++) {
    preI = preI + ++preJ
}
// console.log(preI)

//26
let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        sumaImpares +=i;
    }
}
