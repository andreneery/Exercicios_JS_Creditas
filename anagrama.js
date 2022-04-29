let palavras = ['CaRs', 'scream', 'foR' , 'poTatos', 'scar', 'four', 'creams', 'racs' ];



// palavras.sort();
// console.log (palavras)

// function agrupandoAnagramas(palavras){

//   let grupoDeAnagramas = {};

//   for(let palavra = 0; palavra < palavras.length; palavra++){
    
//   }  
// }

      function groupAnagrams(array) {
        let finalArray = [];
        let rearranged = [];

        // rearrange each word to check for anagram
        for (element of array) {
          rearranged.push(
            element
              .split("")
              .sort()
              .join("")
          );
        }

        // remove duplicates
        let uniqueArray = rearranged.filter(
          (member, index) => rearranged.indexOf(member) === index
        );

        // compare original array with dupliates
        for (word of uniqueArray) {
          let chunk = [];

          for (char of array) {
            if (
              word ===
              char
                .split("")
                .sort()
                .join("")
            ) {
              chunk.push(char);
            }
          }
          finalArray.push(chunk.sort());
        }
        return finalArray;
      }

console.log(groupAnagrams(palavras))