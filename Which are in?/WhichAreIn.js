function inArray(array1,array2){
  let resultado = [];
  
  for (let i = 0; i<array2.length; i++){
      for (let j = 0; j<array1.length; j++) {
        if (array2[i].includes(array1[j]) && !resultado.includes(array1[j])) resultado.push(array1[j]);
      }
  }
  
  return resultado.sort();
}
