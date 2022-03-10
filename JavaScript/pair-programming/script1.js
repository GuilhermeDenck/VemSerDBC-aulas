// 1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
//    Exemplo: minhaFuncao(370914) // retorno esperado: 419073 (É o número 419073 e não a string '419073', o mesmo vale para o parâmetro passado);


function invertNumber(num){
    let numInvertido = 0;
    while(num > 0){
        let resto = num % 10;
        numInvertido = numInvertido * 10 + resto;
        num = Math.floor(num / 10);
    }
    return numInvertido;
}

console.log(invertNumber(370914));