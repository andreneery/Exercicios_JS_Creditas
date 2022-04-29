let frase = prompt("Informe a frase: ").toLowerCase();
let contadorDePalavras = frase.split(' '); 

// console.log(contadorDePalavras);

/* o split faz com que a frase seja armazenada de palavra em palavra, utilizando o espaço como o separador */


/* reduce serve para contar quantas palavras foram armazenadas no array (contador) */
/* necessário que haja uma array que armazenem a contagem das palavras e as palavras informadas. */

let total = contadorDePalavras.reduce((contador, palavras) => {
    contador[palavras] = (contador[palavras] || 0) + 1;
    return contador;
}, {});

// o contador é o acumulador e palavras é o indice da posição do array, deste modo, enquanto o acumulador passa pelo array e verificar uma palavra, ele terá o valor de 0 e será somado com +1, se houver outra palavra igual ele acrescentará novamente, tendo em vista que ele irá considerar que passou novamente pelo indice. 

console.log(total);
