let palavra = prompt("Informe a palavra ou frase: ").toLowerCase()
let palavraInvertida = "";
let palavraTransformada = "";

palavraTransformada = palavra.replace(/[^a-z]/g, '');
// no regex o not é identifficado pelo "^" //

//inverter a palavra informada com o metodo for: 

for(let i = palavraTransformada.length - 1; i >= 0; i--){
  palavraInvertida += palavraTransformada[i];

}

// o -1 no palavra transformada serve para que o laço for fique do mesmo tamanho que o array. 

console.log("A palavra é: ", palavraTransformada);
console.log("A palavra invertida fica: ", palavraInvertida);

//verificar se a palavra fornecida é um palindromo: 

if(palavraInvertida === palavraTransformada){
  console.log("É um palindromo");
}else{
  console.log("Não é um palindromo");
}